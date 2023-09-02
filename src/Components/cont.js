import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

//using odmb api key
export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({ children }) => {
  //to send the data to main page
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState(`titanic`); //Used for Search Functionality here, default query is titanic and using useState wwe will update it.

  //defining getMovie to use the API_URL
  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      //data is an object that we get as an response to res.json()
      console.log(data);

      if (data.Response === "True") {
        setIsLoading(false);
        setIsError({
          show: false,
          msg: "",
        });
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //to load the function when page loads
  useEffect(() => {
    //This is called deBounce where we only secnd request after a certain timeout
    const Timer = setTimeout(() => {
      getMovie(`${API_URL}&s=${query}`); //Passing the query here and this will update using useState when get the search from frontend
    }, 500);

    return () => clearTimeout(Timer);
  }, [query]);

  return (
    <AppContext.Provider value={{ isError, movie, isLoading, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

//defining useGlobalContext to easily export AppContext.
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

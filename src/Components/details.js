import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "./cont";
import { useState, useEffect } from "react";

const Details = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

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
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //to load the function when page loads
  useEffect(() => {
    //This is called deBounce where we only secnd request after a certain timeout
    const Timer = setTimeout(() => {
      getMovie(`${API_URL}&i=${id}`); //Passing the query here and this will update using useState when get the search from frontend
    }, 400);

    return () => clearTimeout(Timer);
  }, [id]);

  if (isLoading) {
    return <div className="text-center text-3xl p-56 m-auto">Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex bg-gray-700 h-5/6 w-4/5 mt-14">
          <figure>
            <img src={movie.Poster} className="p-2 "></img>
          </figure>
          <div className="p-7 ml-4">
            <h1 className="text-3xl font-black">{movie.Title}</h1>
            <p className="text-2xl font-medium mt-2">Actors: {movie.Actors}</p>
            <p className="text-2xl font-medium mt-2">
              Director: {movie.Director}
            </p>
            <p className="text-lg font-medium mt-2">Runtime: {movie.Runtime}</p>
            <p className="text-lg font-medium mt-2">
              Release Date: {movie.Released}
            </p>
            <p className="text-2xl font-medium mt-2 text-yellow-500">
              IMDB Rstings: {movie.imdbRating}
            </p>
            <p className=" text-lg font-medium mt-2 text-blue-100">
              Genre: {movie.Genre}
            </p>
            <NavLink to="/" className=" m-10">
              <div className="text-lg font-bold border border-white w-28 px-3 py-2 text-center rounded-lg hover:scale-105 hover:opacity-80 transition-all">
                Go Back
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

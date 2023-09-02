import React from "react";
import { useGlobalContext } from "./cont";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie, isLoading, isError } = useGlobalContext();

  if (isLoading) {
    return <div className="text-center text-3xl p-5">Loading...</div>;
  }

  return (
    <>
      <section className="movie-page flex flex-row">
        <div className="grid grid-cols-3 gap-4">
          {movie.map((currentMovie) => {
            const { imdbID, Poster, Title } = currentMovie;
            const movieTitle = Title.substring(0, 27);
            return (
              <NavLink
                to={`movie/${imdbID}`}
                key={imdbID}
                className=" overflow-hidden "
              >
                <div className="card text-center border border-opacity-50 border-yellow-300 m-3 bg-gray-900 flex flex-col p-2 pb-6 items-center hover:bg-gray-800 transition-opacity">
                  <p className="text-yellow-500 font-semibold text-2xl p-3 hover:scale-105 hover:text-yellow-400">
                    {movieTitle.length >= 27
                      ? `${movieTitle}...`
                      : `${movieTitle}`}
                  </p>
                  <img src={Poster} alt={imdbID} className="h-96" />
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;

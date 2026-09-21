import React from 'react';
import { MovieContext } from '../context/MovieContext';
import { useContext } from 'react';
function MovieGrid() {
  const { movies, isLoading } = useContext(MovieContext);
  return (
    <div>
      <h1>Top movies for you</h1>
      {isLoading ? (
        <h1>Movie is fetching...</h1>
      ) : (
        movies?.map((movie) => <div>{movie.Title}</div>)
      )}
    </div>
  );
}

export default MovieGrid;

//api calling fn
//movies state
//count state

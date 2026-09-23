import React from 'react'
import {useParams} from 'react-router-dom'

function MovieDetail({ movies }) {
  const { title, id } = useParams();

  const data = movies.find((movie) => movie.id === Number(id));

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default MovieDetail
import React from 'react'

function MovieCard({movie}) {
  return (
    <div className='card' key={movie.id} >
    <h1>{movie.title}</h1>
    <p>{movie.year}</p>
    <p>{movie.genre}</p>
  </div>
  )
}

export default MovieCard

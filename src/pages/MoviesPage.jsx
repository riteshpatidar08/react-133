import React from "react";
import { Link } from "react-router-dom";

function MoviesPage({ movies }) {
  return (
    <div style={{ height: "90vh", width: "96vw",marginLeft : "20px", marginTop : "10px"}}>
      <h2>Top movies near you</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop :"10px"
        }}
      >
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movies/${movie.title}/${movie.id}`}
            style={{
              border: "1px solid gray",
              borderRadius : "10px",
              padding: "20px",
              height: "250px",
              width: "250px",
              textDecoration: "none",
              color: "black",
            }}
          >
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MoviesPage;
import React from 'react';
import { MovieContext } from '../context/MovieContext';
import { useContext } from 'react';
function InputSearch() {
  //NOTE consuming the values from movieContext
  const { query, setQuery, fetchData, movies } = useContext(MovieContext);

  console.log(query);
  console.log(movies);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(query);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setQuery(e.target.value)} value={query} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default InputSearch;

//23d3974b

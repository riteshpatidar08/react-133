import { createContext, useState } from 'react';
import { useContext } from 'react';
import { NameContext } from './NameContext';
import axios from 'axios';
export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const { name } = useContext(NameContext);
  console.log(name);
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchData = async (query) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apiKey=23d3974b`
      );
      console.log(res.data);
      setMovies(res.data.Search);
      setTotalResults(res.data.totalResults);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MovieContext.Provider
      value={{ fetchData, movies, totalResults, query, setQuery, isLoading }}
    >
      {children}
    </MovieContext.Provider>
  );
};

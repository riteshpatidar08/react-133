//useState , useEffect , context , reducer

import { useEffect, useState } from 'react';
import axios from 'axios';
function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false)
      }
    };
    fetchData();
  }, []);

  return [data, isLoading, error];
}

//custom hook  use kiya hain kya
// custom hooks ?
export default useFetch;
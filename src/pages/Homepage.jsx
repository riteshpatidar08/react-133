import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Homepage() {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/todos'
        );
        console.log(res.data);

        // navigate('/dashboard');
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, []);

  return <div>

    <button onClick={()=>navigate(-1)}>GO back</button>
  </div>;
}

export default Homepage;



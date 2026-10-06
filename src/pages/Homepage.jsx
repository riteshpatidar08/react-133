// import React from 'react';
// import { useReducer } from 'react';
// function Homepage() {

//   const initialState = { count: 0 };

//   const countReducer = (state, action) => {
//     if (action.type === 'INCREMENT') {
//       return { count: state.count + 1 };
//     } else if (action.type === 'DECREMENT') {
//       return { count: state.count - 1 };
//     }

//     return state;
//   };

//   const [state, dispatch] = useReducer(countReducer, initialState);

//   return (
//     <div>
//       {state.count}
//       <button
//         onClick={() => {
//           dispatch({ type: 'INCREMENT' });
//         }}
//       >
//         Increment
//       </button>
//     </div>
//   );
// }

// export default Homepage;

// // export const increment = () =>  "INCREMENT"
// //NOTE  useReducer => why to use instead of useState
// //NOTE intitalObject
// //NOTE  dispatch()
// //NOTE action object
// //reducer function ka kaam kya hain
// // flow =>

//   //data fetching using reducer
import React from 'react';
import { useReducer, useEffect } from 'react';
import axios from 'axios';
import useFetch from '../hooks/useFetch';
function Homepage() {


  const [data , isLoading , error] = useFetch('https://dummyjson.com/products')
console.log(data)

  const initialState = { data: [], loading: false, error: null };

  const apiReducer = (state, action) => {
    if (action.type === 'FETCH_LOADING') {
      return { ...state, loading: true };
    } else if (action.type === 'FETCH_SUCCESS') {
      return { ...state, loading: false, data: action.payload };
    } else if (action.type === 'FETCH_FAILED') {
      return { ...state, loading: false, error: action.payload };
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(apiReducer, initialState);
  console.log(state, 'ye wo state object hain jo reducer ne diya hain');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // --data fetching will start here
        dispatch({ type: 'FETCH_LOADING' });

        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        console.log(res.data);
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: 'FETCH_FAILED', payload: error.message });
      }
    };

    fetchData();
  }, []);

  return <div>{JSON.stringify(state.data)}</div>;
}

export default Homepage;

//api data , loading => true/false , error
// starting point ---------- loading : true
// data received ------ data : data , loading ; false
// erro received ---- erorr : erorr , laoding : flase
// loading -> ui => spinner LoadingScreen
// error => ui => error =< errorSCreen
// like and dislike using useReducer 

//What is reducer function  ?  action  ? dispatch()

//NOTE useState;
//NOTE useEffect;
//NOTE useContext; 
//NOTE useReducer;
// Custom Hooks : 

// multiple component => users page / product page / orders page 

// axios.get(url)  //useFetch . useLocalStorage 










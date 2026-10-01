// // // // // import React, { useEffect } from 'react';
// // // // // import axios from 'axios';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // function Homepage() {
// // // // //   const navigate = useNavigate();
// // // // //   useEffect(() => {
// // // // //     const fetchdata = async () => {
// // // // //       try {
// // // // //         const res = await axios.get(
// // // // //           'https://jsonplaceholder.typicode.com/todos'
// // // // //         );
// // // // //         console.log(res.data);

// // // // //         // navigate('/dashboard');
// // // // //       } catch (error) {
// // // // //         console.log(error);
// // // // //       }
// // // // //     };

// // // // //     fetchdata();
// // // // //   }, []);

// // // // //   return <div>

// // // // //     <button className="text-sky-500" onClick={()=>navigate(-1)}>GO back</button>
// // // // //   </div>;
// // // // // }

// // // // // export default Homepage;




// // // // // // color properties 
// // // // // // background color 
// // // // // // padding margin , border border radius 
// // // // // // display properties 
// // // // // // position properties flex ,grid , responsive antimation    





// // // // import React from 'react';

// // // // import { useReducer } from 'react';

// // // // function Homepage() {

// // // //   const initialState = { count: 0 };

 

// // // //   const countReducer = (state, action) => {

// // // //     if (action.type === 'INCREMENT') {

// // // //       return { count: state.count + 1 };

// // // //     } else if (action.type === 'DECREMENT') {

// // // //       return { count: state.count - 1 };

// // // //     }

 

// // // //     return state;

// // // //   };

 

// // // //   const [state, dispatch] = useReducer(countReducer, initialState);

 

// // // //   return (

// // // //     <div>

// // // //       {state.count}

// // // //       <button

// // // //         onClick={() => {

// // // //           dispatch({ type: 'INCREMENT' });

// // // //         }}

// // // //       >

// // // //         Increment

// // // //       </button>

// // // //     </div>

// // // //   );

// // // // }

 

// // // // export default Homepage;

 

// // // import React from 'react';
// // // import { useReducer } from 'react';

// // // function Homepage() {

// // //   const initialState = {cart: [],totalResult : 0};

// // //   const cartReducer = (state, action) => {

// // //     if (action.type === 'addToCart') {
// // //       return {cart: [...state.cart,action.payload], totalResult : state.cart.length +1};} 

// // //        if (action.type === 'removeFromCart') {
// // //       return {
// // //         cart: state.cart.slice(0, -1),
// // //         totalResult: state.cart.length - 1
// // //       };}

// // //     return state;
// // //   };

// // //   const [state, dispatch] = useReducer(cartReducer, initialState);

// // //   return (
// // //     <div>

// // //       <button onClick={() => {dispatch({ type: 'addToCart' , payload : {name : "TV", price : 20000} });}}>Add to Cart</button>

// // //       <button onClick={() => {dispatch({ type: 'removeFromCart'});}}>Remove from Cart</button>



// // //       <h2>Cart Items: {state.totalResult}</h2>

// // //     </div>
// // //   );
// // // }

// // // export default Homepage;

// // import React, { useEffect, useReducer } from 'react';
// // import axios from 'axios';

// // function Homepage() {

// //   const initialState = {data: [],loading: false,error: null};

// //   const getDataReducer = (state, action) => {

// //     if (action.type === "fetchData") {
// //       return {...state,loading: true};
// //     }

// //     if (action.type === "storeData") {
// //       return {data: action.payload,loading: false,error: null};
// //     }

// //     if (action.type === "error") {
// //       return {data: [],loading: false,error: action.payload};
// //     }

// //     return state;
// //   };

// //   const [state, dispatch] = useReducer(getDataReducer,initialState
// //   );

// //   useEffect(() => {

// //     const getData = async () => {
// //       dispatch({ type: "fetchData" });
// //       try {

// //         const res = await axios.get("./movies");
// //         dispatch({type: "storeData",payload: res.data});

// //       } catch (error) {

// //         dispatch({type: "error",payload: error.message});

// //       }

// //     };

// //     getData();

// //   }, []);

// //   return (
// //     <div>

// //       {state.loading && <h2>Loading...</h2>}

// //       {state.error && <h2>{state.error}</h2>}

// //       <h2>Movies: {state.data.length}</h2>

// //     </div>
// //   );
// // }

// // export default Homepage;


// import React from 'react';
// import { useReducer, useEffect } from 'react';
// import axios from 'axios';
// function Homepage() {
//   const initialState = { data: [], loading: false, error: null };
 
//   const apiReducer = (state, action) => {
//     if (action.type === 'FETCH_LOADING') {
//       return { ...state, loading: true };
//     } else if (action.type === 'FETCH_SUCCESS') {
//       return { ...state, loading: true, data: action.payload };
//     } else if (action.type === 'FETCH_FAILED') {
//       return { ...state, loading: false, error: action.payload };
//     } else {
//       return state;
//     }
//   };
 
//   const [state, dispatch] = useReducer(apiReducer, initialState);
//   console.log(state, 'ye wo state object hain jo reducer ne diya hain');
 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // --data fetching will start here
//         dispatch({ type: 'FETCH_LOADING' });
//         const res = await axios.get(
//           'https://jsonplaceholder.typicode.com/posts'
//         );
//         console.log(res.data);
//         dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
//       } catch (error) {
//         console.log(error);
//         dispatch({ type: 'FETCH_FAILED', payload: error.message });
//       }
//     };
 
//     fetchData();
//   }, []);
 
//   return ( 
//   <div> 
//     {state.loading && <p>Loading...</p>} 
 
//     {state.error && <p>Error: {state.error}</p>} 
 
//     {!state.loading && !state.error && ( 
//       <pre>{JSON.stringify(state.data, null, 2)}</pre> 
//     )} 
//   </div> 
// ); 
// }
 
// export default Homepage;
 
// //api data , loading => true/false , error
 
// // starting point ---------- loading : true
 
// // data received ------ data : data , loading ; false
 
// // erro received ---- erorr : erorr , laoding : flase




import React, { useReducer, useEffect } from "react";
import axios from "axios";

function Homepage() {
  // Initial State
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };

  // Reducer
  const apiReducer = (state, action) => {
    if (action.type === "FETCH_LOADING") {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    if (action.type === "FETCH_SUCCESS") {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    }

    if (action.type === "FETCH_FAILED") {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    return state;
  };


  const [state, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        dispatch({
          type: "FETCH_LOADING",
        });

        
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        
        dispatch({
          type: "FETCH_SUCCESS",
          payload: res.data,
        });
      } catch (error) {
        dispatch({
          type: "FETCH_FAILED",
          payload: error.message,
        });
      }
    };

    fetchData();
  }, []);

  
  return (
    <div>

      
      {state.loading && (
        <p>Loading...</p>
      )}

      {/* Error */}
      {state.error && !state.loading && (
        <div>
          <h2>Something went wrong</h2>
          <p>{state.error}</p>
        </div>
      )}

      
      {!state.loading &&
        !state.error &&
        state.data.length > 0 && (
          <div>
            <h2>All Posts</h2>

            <p>
              Total Posts: {state.data.length}
            </p>

            {state.data.map((post) => (
              <div key={post.id}>
                <h3>
                  {post.id}. {post.title}
                </h3>

                <p>{post.body}</p>

                <p>User ID: {post.userId}</p>

                <hr />
              </div>
            ))}
          </div>
        )}

      {!state.loading &&
        !state.error &&
        state.data.length === 0 && (
          <p>No posts available.</p>
        )}
    </div>
  );
}

export default Homepage;
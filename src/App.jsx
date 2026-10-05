
// import React, { useReducer, useEffect } from "react";
// import axios from "axios";

// function Homepage() {
//   // Initial State
//   const initialState = {
//     data: [],
//     loading: false,
//     error: null,
//   };

//   // Reducer
//   const apiReducer = (state, action) => {
//     if (action.type === "FETCH_LOADING") {
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     }

//     else if (action.type === "FETCH_SUCCESS") {
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//         error: null,
//       };
//     }

//     else if (action.type === "FETCH_FAILED") {
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     }

//     return state;
//   };


//   const [state, dispatch] = useReducer(apiReducer, initialState);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
      
//         dispatch({
//           type: "FETCH_LOADING",
//         });

        
//         const res = await axios.get(
//           "https://jsonplaceholder.typicode.com/posts"
//         );

        
//         dispatch({
//           type: "FETCH_SUCCESS", payload: res.data,
//         });

//       } catch (error) {
//         dispatch({
//           type: "FETCH_FAILED",
//           payload: error.message,
//         });
//       }
//     };

//     fetchData();
//   }, []);

  
//   return (
//     <div>

      
//       {state.loading && (
//         <p>Loading...</p>
//       )}

//       {/* Error */}
//       {state.error && !state.loading && (
//         <div>
//           <h2>Something went wrong</h2>
//           <p>{state.error}</p>
//         </div>
//       )}

      
//       {!state.loading &&
//         !state.error &&
//         state.data.length > 0 && (
//           <div>

//             {/* <p>
//               Total Posts: {state.data.length}
//             </p>

//             {state.data.map((post) => (
//               <div key={post.id}>
//                 <h3>
//                   {post.id}. {post.title}
//                 </h3>

//                 <p>{post.body}</p>

//                 <p>User ID: {post.userId}</p>

//                 <hr />
//               </div>
//             ))} */}

//             {JSON.stringify(state.data)}
//           </div>
//         )}

//       {!state.loading &&
//         !state.error &&
//         state.data.length === 0 && (
//           <p>No posts available.</p>
//         )}
//     </div>
//   );
// }

// export default Homepage;


import React, { useReducer, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "./hooks/useLocalStroage";

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

    else if (action.type === "FETCH_SUCCESS") {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    }

    else if (action.type === "FETCH_FAILED") {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    return state;
  };

  const [state, dispatch] = useReducer(
    apiReducer,
    initialState
  );

  // LocalStorage
  const [savedData, setSavedData] = useLocalStorage(
    "posts",
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({
          type: "FETCH_LOADING",
        });

        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        // Reducer mein data bhejna
        dispatch({
          type: "FETCH_SUCCESS",
          payload: res.data,
        });

        // LocalStorage mein data save karna
        setSavedData(res.data);

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
      {/* Loading */}
      {state.loading && <p>Loading...</p>}

      {/* Error */}
      {state.error && !state.loading && (
        <div>
          <h2>Something went wrong</h2>
          <p>{state.error}</p>
        </div>
      )}

      {/* Data */}
      {!state.loading &&
        !state.error &&
        state.data.length > 0 && (
          <div>
            <h2>Posts</h2>

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

      {/* Empty */}
      {!state.loading &&
        !state.error &&
        state.data.length === 0 && (
          <p>No posts available.</p>
        )}
    </div>
  );
}

export default Homepage;

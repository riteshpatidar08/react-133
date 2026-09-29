// // import React, { useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // function Homepage() {
// //   const navigate = useNavigate();
// //   useEffect(() => {
// //     const fetchdata = async () => {
// //       try {
// //         const res = await axios.get(
// //           'https://jsonplaceholder.typicode.com/todos'
// //         );
// //         console.log(res.data);

// //         // navigate('/dashboard');
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     };

// //     fetchdata();
// //   }, []);

// //   return <div>

// //     <button className="text-sky-500" onClick={()=>navigate(-1)}>GO back</button>
// //   </div>;
// // }

// // export default Homepage;




// // // color properties 
// // // background color 
// // // padding margin , border border radius 
// // // display properties 
// // // position properties flex ,grid , responsive antimation    





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

 

import React from 'react';
import { useReducer } from 'react';

function Homepage() {

  const initialState = {cart: [],totalResult : 0};

  const cartReducer = (state, action) => {

    if (action.type === 'addToCart') {
      return {cart: [...state.cart,action.payload], totalResult : state.cart.length +1};} 

       if (action.type === 'removeFromCart') {
      return {
        cart: state.cart.slice(0, -1),
        totalResult: state.cart.length - 1
      };}

    return state;
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>

      <button onClick={() => {dispatch({ type: 'addToCart' , payload : {name : "TV", price : 20000} });}}>Add to Cart</button>

      <button onClick={() => {dispatch({ type: 'removeFromCart'});}}>Remove from Cart</button>



      <h2>Cart Items: {state.totalResult}</h2>

    </div>
  );
}

export default Homepage;
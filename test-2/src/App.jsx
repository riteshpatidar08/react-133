// lifiting in data send to prent
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <Input name={name} setName={setName} />

//       <Display name={name} />
//     </div>
//   );
// }

// export default App;

// function Input({ name, setName }) {
//   return (
//     <input
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//       placeholder="Enter your name"
//     />
//   );
// }

// function Display({ name }) {
//   return <h1>Hello {name}</h1>;
// }


// form submitted

// import React, { useState } from 'react'

// function App() {
//   const[firstname,setfirstname] = useState('')
//   const[lastname,setlastname] = useState('')
//   const[password,setpassword] = useState('')
//   const[email,setemail] = useState('')
//   const[submit,setsubmit] =useState(false)
//   const [form ,setform] = useState(null)

//   const handleSubmit=(e)=>{
//     setform({
//       firstname:firstname,
//       lastname:lastname,
//       password:password,
//       email:email
//     })
//     e.preventDefault();
//     setsubmit(true)
//     setfirstname('')
//     setlastname('')
//     setpassword('')
//     setemail('')
//   }
  

//   return (
//     <div>
//       <form onSubmit={handleSubmit} >
//       <label htmlFor="firstname">firstname</label>
//       <input type="text" name='firstname' onChange={(e)=>setfirstname(e.target.value)} value={firstname} /><br/>

//       <label htmlFor="lastname">lastname</label>
//       <input type="text" name='lastname' onChange={(e)=>setlastname(e.target.value)} value={lastname}/><br/>

//       <label htmlFor="password">password</label>
//       <input type="text" name='password' onChange={(e)=>setpassword(e.target.value)} value={password}/><br/>

//       <label htmlFor="email">email</label>
//       <input type="text" name='email' value={email}onChange={(e)=>setemail(e.target.value)} /><br/>

//     <button >submit</button>
//       </form>

//       <div>
//         <h1>live preview</h1>
//         <p>{firstname}</p>
//         <p>{lastname}</p>
//         <p>{password}</p>
//         <p>{email}</p>
//       </div>

//       {submit ? <div>
//         <h1>submit</h1>
//         <p>{form.firstname} </p>
//         <p>{form.lastname} </p>
//         <p>{form.password} </p>
//         <p>{form.email} </p>
//       </div>:"null"}
//     </div>
//   )
// }

// export default App

// array in list rendering
// function App() {
//   const names = ["Virendra", "Rahul", "Amit"];

//   return (
//     <div>
//       {names.map((name) => (
//         <h2>{name}</h2>
//       ))}
//     </div>
//   );
// }

// export default App;

// use reducer

// import { useReducer } from "react";

// const initialState = { count: 0
// };

// function reducer(state, action) {
//   if (action.type === "INCREMENT") {
//     return {
//       count: state.count + 1
//     };
//   }

//   if (action.type === "DECREMENT") {
//     return {
//       count: state.count - 1
//     };
//   }

//   return state;
// }

// function App() {
//   const [state, dispatch] = useReducer(
//     reducer,
//     initialState
//   );

//   return (
//     <div>
//       <h1>{state.count}</h1>

//       <button
//         onClick={() =>
//           dispatch({ type: "INCREMENT" })
//         }
//       > + </button>

//       <button
//         onClick={() =>
//           dispatch({ type: "DECREMENT" })
//         }
//       >  - </button>
//     </div>
//   );
// }

// export default App;


// data, loading ,error

import React, { useEffect, useReducer } from "react";

function App() {
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };

  
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_LOADING":
        return {
          ...state,
          loading: true,
          error: null,
        };

      case "FETCH_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null,
        };

      case "FETCH_ERROR":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

      default:
        return state;
    }
  };

  
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const fetchProducts = async () => {
    dispatch({
      type: "FETCH_LOADING",
    });

    try {
      const response = await fetch(
        "https://dummyjson.com/products"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const result = await response.json();

      dispatch({
        type: "FETCH_SUCCESS",
        payload: result.products,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  if (state.loading) {
    return <h2>Loading...</h2>;
  }

  if (state.error) {
    return <h2>Error: {state.error}</h2>;
  }

  return (
    <div>
      <h1>Products</h1>

      {state.data.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
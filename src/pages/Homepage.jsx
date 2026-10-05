// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// function Homepage() {
//   const navigate = useNavigate();
//   useEffect(() => {
//     const fetchdata = async () => {
//       try {
//         const res = await axios.get(
//           'https://jsonplaceholder.typicode.com/todos'
//         );
//         console.log(res.data);

//         // navigate('/dashboard');
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchdata();
//   }, []);

//   return <div>

//     <button onClick={()=>navigate(-1)}>GO back</button>
//   </div>;
// }

// export default Homepage;


// Q1.what is the child props
//answer-Props are  passed data from a parent component to a child component

// Q2. what is lifting satate up expain with example

//answer - Lifting state up means moving state from  child component to their parent, so multiple components can share the same data

example - function Parent() {
  const [name, setName] = useState("");

  return (
    <>
      <Input name={name} setName={setName} />
      <Display name={name} />
    </>
  );
}

function Input({ name, setName }) {
  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

function Display({ name }) {
  return <h2>Hloooooo kya haal {name}</h2>;
}

// Q3. why be must update the state variable 

//We update state using the setter because it tells to the React that the state has changed and  React can update the ui

/// Q4. state variable submit form in display <Show></Show>
import React from 'react'

function Homepage() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    setName(formData.get("name"));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" />
        <button type="submit">Submit form</button>
      </form>

      <Show name={name} />
    </>
  );
}

export default Homepage



// Q5.why we use key in list rendering with example


//answer - We use key in list rendering to give item a unique identity. It helps React update the list when items are added, removed, or changed

const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Amit" },
  { id: 3, name: "Neha" }
];

function Homepage() {
  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

// Q6. what is causes of unneccessay <re-render></re-render>

// Q7.when we use reducer variable instuded of useState
// Q8.what is action dispatch use reducer

//action is an object that tells the reducer what happened
//dispatch() is used to send the action to the reducer
// usestate -how the state should change


// Q9.what happen when we update state
// When we update state in React then React knows something has changed and re-renders the component to show the new value


// Q10 use reducer throw with data , loading , error;
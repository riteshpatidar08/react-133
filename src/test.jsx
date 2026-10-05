// ANS 2 => Lifting state up means moving shared state to the  common parent component 

// ANS 3 => we updates state for re-render the component .

// ANS 4 => 
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <h2>{name}</h2>
    </div>
  );
}

export default App;


// ANS 5 => we use key to identify each item in a list .


// const users = [
//   { id: 1, name: "amit" },
//   { id: 2, name: "nirmal" },
   
// ];

// function App() {
//   return (
//     <div>
//       {users.map((user) => (
//         <p key={user.id}>
//           {user.name}
//         </p>
//       ))}
//     </div>
//   );
// }

// ANS => 6 parent component re-render , Unnecessary state updates

// ANS 7 => WE use useReducer when state update logic becomes complex .


// ANS 8 => dispatch send the action to reducer and action tells the reducer what should happen .


// ANS 9 => when we update the state react re-render the component . 


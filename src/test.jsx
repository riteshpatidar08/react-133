
// Answer no 1 : child prop is a special prop in react that lets a component and display content placed between tags 
// example :  <div>
// <h1>hello<h1/>
// <div/>
//  here div is parent  tag and h1 is child prop 


// Answer no 3: becuase state variables are immutable so we didnt change the states



// Answer no 2 lifting state up mean moving the state from a child component to their closet parent so multiple component access same data

// example :  input -> user type a name and display show the name when we give the name component to their parent  
// form -> name Component -> child (input )



// Answer no 4 => when we call a setter fn like setName then react does not update the variable. react re render the component
    
// Answer no 5 =>  we send req to api , at req time react show loading when data fetching success on the ui we show data  and if the url or any function syntax etc are wrong we show error on the screen if data fetching complete we stop loading
// req->loading->success/error

    
// Answer no 6=> when we have multiple states and complex state to change we use reucer hook and when we have a single state to change we use useState because usesate is immutable we upadte i through setter function

// action object : Action object describe what happen in the reducer function

// dispatch : in the dispatch we have action type, payload and we passed dispatch into reducer fn

// REducer fn : the reducer decides how the state shoulld changed based on the action


// Answer no 7 => causes of unnecessary re renders =>1.  update the state unnecessarly  2. parent component re render  
                                                   // 3. creating new objects for arrays on every mount and render phase  4. update the state variable without setter function 


// Answer no 10 : list rendering : list rendering mean we have multiple data in the array and we want to show it ui in the form of the list card etc it is list rebdering 
// example : [{
// {id : 1 , name : tv, price : 20000}
// {id :2, name :  Ac , price : 50k}
// }]


// and we use key for giving a unique id to the item for the crud operation in the crud operation we update delete any item from its id which parse in key 


// Answer no 8 : 


import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {setForm({...form,[e.target.name]: e.target.value,});}

  return (
    <div>
      <input name="name"placeholder="Enter name"value={form.name} onChange={handleChange}/>

      <input name="email"placeholder="Enter email"value={form.email} onChange={handleChange}/>

      <h2>Form Data</h2>
      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
    </div>
  );
}

export default App;

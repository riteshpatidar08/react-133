// // import React, { useEffect, useState } from 'react';

// // function App() {
// //   const [isVisible, setisVisible] = useState(false);
// //   return (
// //     <div>
// //       {isVisible ? <Navbar /> : <h1>no data</h1>}

// //       <button onClick={() => setisVisible(!isVisible)}>Toggle</button>
// //     </div>
// //   );
// // }

// // export default App;

// // function Navbar() {
// //   //function component how we handle component lifeCycle (useEffect mounting [] , updating [name] , unmount => return ()=>{} )
// //   useEffect(() => {
// //     console.log('this will run when navbar mount');
// //     const intervalId = setInterval(() => {
// //       console.log('this will run in every 1 sec');
// //     }, 1000);
// //     return () => {
// //       clearInterval(intervalId);
// //     };
// //   }, []);
// //   return (
// //     <header>
// //       <h1>District</h1>
// //     </header>
// //   );
// // }

// import React, { useState } from 'react';
// import { NameContext } from './context/NameContext';
// import { useContext } from 'react';
// function App() {
//   // const [name , setName] = useState('REACT')

//   return (
//     <div style={{ border: '5px solid black', padding: '20px' }}>
//       <ComponentB />
//       <ComponentC />
//     </div>
//   );
// }

// export default App;

// function ComponentB() {
//   console.log('ComponentB is runnning....');
//   const { name } = useContext(NameContext);
//   return (
//     <div
//       style={{
//         border: '2px solid blue',
//         padding: '20px',
//         marginBottom: '20px',
//       }}
//     >
//       This is component B<h1>Tech:{name}</h1>
//     </div>
//   );
// }
// function ComponentC() {
//   console.log('ComponentC is runnning....');
//   return (
//     <div style={{ border: '2px solid red', padding: '20px' }}>
//       <h1>This is component C</h1>
//       <ComponentD />
//       <ComponentE />
//     </div>
//   );
// }
// function ComponentD() {
//   console.log('ComponentD is runnning....');
//   return (
//     <div style={{ border: '2px solid green', padding: '20px' }}>
//       This is component D
//     </div>
//   );
// }
// function ComponentE() {
//   console.log('ComponentE is runnning....');
//   const { name } = useContext(NameContext);
//   const { setName } = useContext(NameContext);
//   const handleNameChange = () => {
//     setName('Angular');
//   };
//   return (
//     <div style={{ border: '2px solid yellow', padding: '20px' }}>
//       This is component E<h1>Tech : {name}</h1>
//       <button onClick={handleNameChange}>Change Name</button>
//     </div>
//   );
// }

// import React from 'react';
// import Navbar from './components/Navbar';
// import InputSearch from './components/InputSearch';
// import MovieGrid from './components/MovieGrid';
// import { Route, Routes } from 'react-router-dom';
// import Homepage from './pages/Homepage';
// import EventsPage from './pages/EventsPage';
// import EventsDetailPage from './pages/EventsDetailPage';
// import Dashboard from './pages/dashboard';
// import Setting from './pages/Setting';
// import Overview from './pages/Overview';
// import Integrations from './pages/Integrations';
// import Notfound from './pages/Notfound';
// import ProtectedRoutes from './components/ProtectedRoutes';
// import Login from './pages/Login';
// import OpenRoutes from './components/OpenRoutes';
// import Tailwindtemplate from './pages/Tailwindtemplate';

// function App() {
//   const eventsData = [
//     {
//       id: 1,
//       title: 'Morning Yoga',
//       location: 'Jaipur',
//       startData: '23-09-2026',
//     },
//     { id: 2, title: 'Marathon', location: 'Jaipur', startData: '24-09-2026' },
//     {
//       id: 3,
//       title: 'Diwali Party',
//       location: 'Jaipur',
//       startData: '6-11-2026',
//     },
//   ];
//   return (
//     <div>
//       <Routes>
//         {/* open routes goes here  */}
//         <Route path='/tailwind' element={<Tailwindtemplate/>}/>
//         <Route element={<OpenRoutes />}>
//           <Route path="/login" element={<Login />} />
//         </Route>

//         {/* protected routes goes here  */}
//         <Route element={<ProtectedRoutes />}>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/dashboard" element={<Dashboard />}>
//             <Route index element={<Overview />} />
//             <Route path="settings" element={<Setting />} />
//             <Route path="overview" element={<Overview />} />
//             <Route path="integration" element={<Integrations />} />
//           </Route>
//           <Route path="/events" element={<EventsPage events={eventsData} />} />
//           <Route
//             path="/events/:title/:id"
//             element={<EventsDetailPage events={eventsData} />}
//           />
//         </Route>
//         <Route path="*" element={<Notfound />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// outlet ??
//programmatic navigation => login => response success => navigate('homepage)
//protected routes

//NOTE note useref , controlled ,uncontrolled , forwared ref , useReudcer , use clal , use memo , useLayout , use action   


// import React from 'react';
// import { useRef  , useState} from 'react';
// function App() {
//    const currentRef = useRef(0);
//    const inputRef = useRef(null) ;
 
//    const [count ,setCount] = useState(0);
//    console.log(currentRef.current)
 
// const handleIncrease =  () => {
//   setCount((prev)=> prev + 1);
//   currentRef.current++
 
// }
 
// const handleSubmit = (e) =>{
// e.preventDefault();
// console.log( "name" , inputRef.current.value)
// }
 
//   return (
//     <div>
//       <p>ref : {currentRef.current}</p>
   
//       <p>count : {count}</p>
// <button onClick={handleIncrease}>Increase count</button>
//       <h1>UseRef</h1>
 
// <form onSubmit={handleSubmit}>
 
// <input  ref={inputRef} type='text'/>
// <button>Submit</button>
// </form>
 
//     </div>
//   );
// }
 
// export default App;
 
//NOTE useRef  => useRef => object => property | current => kuch bhi data store krskta hu |
// 1. jo data main store karunga wo persist krta hain between the re-renders
//2 . current property par data update krne par component re-render nhi hta hain.
//3 . main kisi bhi element ka reference current property par store kr skta hu
//input => object (properties , methods)
// // NOTE controlled and uncontrolled components
// current : 3
// setter funciton => 3 hi rega /
//  4
 
//NOTE uncontrolled component
// main form fill karunga no koi validation hoga  , jab main form submit karunga using ref main value direct dom se uthaunga  then main v;aidation laga skta hu .
 
//NOTE  controlled component
// form main value fill honge jab main karunga toh onChagne trigger hoga , state variable update hoga live value mujhe milega , live validation krskta hu , input value ko state variable ne controll kr rkha hain


import { useEffect, useRef, useState } from "react";

function App() {
  const [text, setText] = useState("");

  const textRef = useRef("");

  const renderCount = useRef(0);

  renderCount.current++;

  useEffect(() => {
    textRef.current = text;
  }, [text]);

  return (
    <div>
      <h2>Current Value: {text}</h2>

      <h2>Previous Value: {textRef.current}</h2>

      <h2>Render Count: {renderCount.current}</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
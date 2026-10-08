// // // import React, { useEffect, useState } from 'react';

// // // function App() {
// // //   const [isVisible, setisVisible] = useState(false);
// // //   return (
// // //     <div>
// // //       {isVisible ? <Navbar /> : <h1>no data</h1>}

// // //       <button onClick={() => setisVisible(!isVisible)}>Toggle</button>
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // // function Navbar() {
// // //   //function component how we handle component lifeCycle (useEffect mounting [] , updating [name] , unmount => return ()=>{} )
// // //   useEffect(() => {
// // //     console.log('this will run when navbar mount');
// // //     const intervalId = setInterval(() => {
// // //       console.log('this will run in every 1 sec');
// // //     }, 1000);
// // //     return () => {
// // //       clearInterval(intervalId);
// // //     };
// // //   }, []);
// // //   return (
// // //     <header>
// // //       <h1>District</h1>
// // //     </header>
// // //   );
// // // }

// // import React, { useState } from 'react';
// // import { NameContext } from './context/NameContext';
// // import { useContext } from 'react';
// // function App() {
// //   // const [name , setName] = useState('REACT')

// //   return (
// //     <div style={{ border: '5px solid black', padding: '20px' }}>
// //       <ComponentB />
// //       <ComponentC />
// //     </div>
// //   );
// // }

// // export default App;

// // function ComponentB() {
// //   console.log('ComponentB is runnning....');
// //   const { name } = useContext(NameContext);
// //   return (
// //     <div
// //       style={{
// //         border: '2px solid blue',
// //         padding: '20px',
// //         marginBottom: '20px',
// //       }}
// //     >
// //       This is component B<h1>Tech:{name}</h1>
// //     </div>
// //   );
// // }
// // function ComponentC() {
// //   console.log('ComponentC is runnning....');
// //   return (
// //     <div style={{ border: '2px solid red', padding: '20px' }}>
// //       <h1>This is component C</h1>
// //       <ComponentD />
// //       <ComponentE />
// //     </div>
// //   );
// // }
// // function ComponentD() {
// //   console.log('ComponentD is runnning....');
// //   return (
// //     <div style={{ border: '2px solid green', padding: '20px' }}>
// //       This is component D
// //     </div>
// //   );
// // }
// // function ComponentE() {
// //   console.log('ComponentE is runnning....');
// //   const { name } = useContext(NameContext);
// //   const { setName } = useContext(NameContext);
// //   const handleNameChange = () => {
// //     setName('Angular');
// //   };
// //   return (
// //     <div style={{ border: '2px solid yellow', padding: '20px' }}>
// //       This is component E<h1>Tech : {name}</h1>
// //       <button onClick={handleNameChange}>Change Name</button>
// //     </div>
// //   );
// // }

// import { Route, Routes } from 'react-router-dom';
// import Homepage from './pages/Homepage';
// import Navbar from './components/Navbar'
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
//               <Navbar/>
//       <Routes>

//         {/* open routes goes here  */}
//         <Route path='/tailwind' element={<Tailwindtemplate/>}/>
//         {/* <Route element={<OpenRoutes />}> */}
//           <Route path="/login" element={<Login />} />
//         {/* </Route> */}

//         {/* protected routes goes here  */}
//         {/* <Route element={<ProtectedRoutes />}> */}
//           <Route path="/" element={<Homepage />} />
//           <Route path="/dashboard" element={<Dashboard />}>
//             <Route index element={<Overview />} />
//             <Route path="settings" element={<Setting />} />
//             <Route path="overview" element={<Overview />} />
//             <Route path="integration" element={<Integrations />} />
//           {/* </Route> */}
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

// // outlet ??
// //programmatic navigation => login => response success => navigate('homepage)
// //protected routes

// //NOTE note useref , controlled ,uncontrolled , forwared ref , useReudcer , use clal , use memo , useLayout , use action

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
// main form fill karunga no koi validation hoga  , jab main form submit karunga using ref main value direct dom se uthaunga  then main validation laga skta hu .

//NOTE  controlled component 
// form main value fill honge jab main karunga toh onChagne trigger hoga , state variable update hoga live value mujhe milega , live validation krskta hu , input value ko state variable ne controll kr rkha hain


// import React, { useEffect, useRef, useState } from "react";

// function App() {
//   const [text, setText] = useState("");

//   const previousText = useRef("");

//   useEffect(() => {
//     console.log("Current Value:", text);
//     console.log("Previous Value:", previousText.current);

//     previousText.current = text;
//   }, [text]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Enter text"
//       />

//       <p>Current Value: {text}</p>

//       <p>Previous Value: {previousText.current}</p>
//     </div>
//   );
// }

// export default App;


// import React, { useRef } from "react";

// function App() {
//   const videoRef = useRef(null);

//   const handlePlay = () => {
//     videoRef.current.play();
//   };

//  const handlePlause = ()=>{
//     videoRef.current.plause();
//  }

//   return (
//     <div>
//       <video ref={videoRef} width="300" src="sample.mp4"
//       ></video>

  

//       <button onClick={handlePlay}>Play</button>
//       <button onClick={handlePlause}>Plause</button>

      
//     </div>
//   );
// }

// export default App;


// import React, { useEffect, useRef } from "react";

// function App() {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     console.log("Video element:", videoRef.current);

//     videoRef.current.play();
//   }, []);

//   const handlePause = () => {
//     videoRef.current.pause();
//   };

//   return (
//     <div>
//       <video ref={videoRef}width="300" src="sample.mp4"
//       ></video>

//       <br />

//       <button onClick={handlePause}>Pause</button>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";

// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpen = () => {
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={handleOpen}>Open</button>

//       {isOpen && (
//         <div>
//           <h2>welcome</h2>
       
         

//           <button onClick={handleClose}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import { ChevronDown, ChevronUp } from 'lucide-react';
// import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
 
// function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const boxRef = useRef(null);
//   console.log(isOpen);
//   useEffect(() => {
//     const handleClick = (e) => {
//       if (!boxRef.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClick);
//     return () => {
//       document.removeEventListener('mousedown', handleClick);
//     };
//   }, []);
 
//   return (
//     <div
//       ref={boxRef}
//       className="m-10  p-2 w-fit border-10 border-sky-500  rounded-lg"
//     >
//       <button
//         className="text-lg flex justify-center items-center gap-2 font-bold cursor-pointer bg-zinc-800 text-white my-2 px-10 py-4 rounded-2xl"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         Courses
//         {isOpen ? <ChevronUp /> : <ChevronDown />}
//       </button>
//       {isOpen ? (
//         <div className="border-sky-100 shadow-2xl p-4 rounded-2xl bg-zinc-800 text-white flex flex-col gap-4">
//           <ul className="flex flex-col gap-2 p-2  text-white font-semibold text-sky-900">
//             <li>Mern Stack development</li>
//             <li>Cloud Engineer</li>
//             <li>Devops</li>
//           </ul>
//         </div>
//       ) : null}
//     </div>
//   );
// }
 
// export default App;
import React, { useState } from "react";

function UberModule() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      {/* Open Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Book a Ride
        </button>
      )}

      {/* Uber Style Module */}
      {isOpen && (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-5">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">
              Where to?
            </h2>

            <button
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Location Inputs */}
          <div className="space-y-3">

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-black"></div>

              <input
                type="text"
                placeholder="Pickup location"
                className="flex-1 bg-gray-100 px-4 py-3 rounded-lg outline-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>

              <input
                type="text"
                placeholder="Where to?"
                className="flex-1 bg-gray-100 px-4 py-3 rounded-lg outline-none"
              />
            </div>

          </div>

          {/* Ride Options */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">
              Choose a ride
            </h3>

            <div className="space-y-3">

              <div className="flex items-center justify-between border rounded-xl p-4 hover:bg-gray-50 cursor-pointer">
                <div>
                  <p className="font-semibold">Uber Go</p>
                  <p className="text-sm text-gray-500">
                    Affordable ride
                  </p>
                </div>

                <p className="font-bold">₹150</p>
              </div>

              <div className="flex items-center justify-between border rounded-xl p-4 hover:bg-gray-50 cursor-pointer">
                <div>
                  <p className="font-semibold">Uber Sedan</p>
                  <p className="text-sm text-gray-500">
                    Comfortable ride
                  </p>
                </div>

                <p className="font-bold">₹220</p>
              </div>

            </div>
          </div>

          {/* Book Button */}
          <button
            className="w-full mt-6 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800"
          >
            Confirm Ride
          </button>

        </div>
      )}
    </div>
  );
}

export default UberModule;
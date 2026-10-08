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

// import React from 'react';
// import Navbar from './components/Navbar';
// import InputSearch from './components/InputSearch';
// import MovieGrid from './components/MovieGrid';
// import { Route, Routes } from 'react-router-dom';
// import Homepage from './pages/Homepage';
// import EventsPage from './pages/EventsPage';
// import EventsDetailPage from './pages/EventsDetailPage';
// import MoviesPage from './pages/MoviesPage.jsx';
// import MovieDetail from './pages/MovieDetail.jsx';
// import Dashboard from './pages/Dashboard.jsx';
// import Setting from './pages/Setting';
// import Overview from './pages/Overview';
// import Integrations from './pages/Integrations';
// import Customers from './pages/Customers';
// import Account from './pages/Account';
// import Error from './pages/Error';
// import './test.jsx'
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

//    const moviesData = [
//     {
//       id: 1,
//       title: "Avengers",
//       description: "Superhero movie",
//     },
//     {
//       id: 2,
//       title: "Inception",
//       description: "Science fiction movie",
//     },
//     {
//       id: 3,
//       title: "Interstellar",
//       description: "Space adventure movie",
//     },
//   ];
//   return (
//     <div>
      
//       {/* <Navbar/> */}
//       <Routes>
//         <Route path="/" element={<Homepage />} />
      
//         <Route path="/dashboard" element={<Dashboard />}>
//         <Route index element={<Overview/>}/>
//           <Route path="settings" element={<Setting />} />
//           <Route path="overview" element={<Overview />} />
//           <Route path="integration" element={<Integrations />} />
//           <Route path="customers" element={<Customers />} />
//           <Route path="account" element={<Account />} />
//           <Route path="error" element={<Error />} />
//         </Route>
//         <Route path="/events" element={<EventsPage events={eventsData} />} />
//         <Route
//           path="/events/:title/:id"
//           element={<EventsDetailPage events={eventsData} />}
//         />
//         <Route path="/movies" element={<MoviesPage movies={moviesData} />}/>

//         <Route
//           path="/movies/:title/:id"
//           element={<MovieDetail movies={moviesData} />}
//         />



//       </Routes>
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

import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className="p-10">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-zinc-800 text-white px-6 py-3 rounded-xl font-bold cursor-pointer"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">

          <div
            ref={modalRef}
            className="bg-white p-6 rounded-2xl shadow-2xl w-96"
          >
            <h2 className="text-2xl font-bold mb-4">
              My Modal
            </h2>

            <p className="mb-5">
              Ye hamara modal hai.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-red-500 text-white px-5 py-2 rounded-lg cursor-pointer"
            >
              Close
            </button>

          </div>

        </div>
      )}
    </div>
  );
}

export default App;
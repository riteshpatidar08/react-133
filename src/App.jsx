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

import React from 'react';
import Navbar from './components/Navbar';
import InputSearch from './components/InputSearch';
import MovieGrid from './components/MovieGrid';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import EventsPage from './pages/EventsPage';
import EventsDetailPage from './pages/EventsDetailPage';
import Dashboard from './pages/dashboard';
import Setting from './pages/Setting';
import Overview from './pages/Overview';
import Integrations from './pages/Integrations';
import Notfound from './pages/Notfound';
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './pages/Login';
import OpenRoutes from './components/OpenRoutes';
import Tailwindtemplate from './pages/Tailwindtemplate';

function App() {
  const eventsData = [
    {
      id: 1,
      title: 'Morning Yoga',
      location: 'Jaipur',
      startData: '23-09-2026',
    },
    { id: 2, title: 'Marathon', location: 'Jaipur', startData: '24-09-2026' },
    {
      id: 3,
      title: 'Diwali Party',
      location: 'Jaipur',
      startData: '6-11-2026',
    },
  ];
  return (
    <div>
      <Routes>
        {/* open routes goes here  */}
        <Route path='/tailwind' element={<Tailwindtemplate/>}/>
        <Route element={<OpenRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* protected routes goes here  */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Overview />} />
            <Route path="settings" element={<Setting />} />
            <Route path="overview" element={<Overview />} />
            <Route path="integration" element={<Integrations />} />
          </Route>
          <Route path="/events" element={<EventsPage events={eventsData} />} />
          <Route
            path="/events/:title/:id"
            element={<EventsDetailPage events={eventsData} />}
          />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;

// outlet ??
//programmatic navigation => login => response success => navigate('homepage)
//protected routes

//NOTE note useref , controlled ,uncontrolled , forwared ref , useReudcer , use clal , use memo , useLayout , use action   
// import React, { useState } from 'react';

// function App() {
//   // const [firstname, setFirstname] = useState('');
//   // const [lastname, setLastname] = useState('');
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     console.log(e.target.value);
//     console.log(e.target.name);
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     console.log(formData);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//     // console.log(email, password, lastname, firstname);
//     // setFirstname('');

//     // setLastname('');
//     // setEmail('');
//     // setPassword('');
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="firstname">Firstname</label>
//         <input
//           onChange={handleChange}
//           type="text"
//           name="firstname"
//           value={formData.firstname}
//         />{' '}
//         <br />
//         <label htmlFor="lastname">Lastname</label>
//         <input
//           onChange={handleChange}
//           type="text"
//           name="lastname"
//           value={formData.lastname}
//         />{' '}
//         <br />
//         <label htmlFor="email">Email</label>
//         <input
//           onChange={handleChange}
//           type="email"
//           name="email"
//           value={formData.email}
//         />{' '}
//         <br />
//         <label htmlFor="password">Password</label>
//         <input
//           onChange={handleChange}
//           type="password"
//           name="password"
//           value={formData.password}
//         />
//         <button>Submit</button>
//       </form>

//       <h1>Live Preview</h1>
//       <p>firstname : {formData.firstname} </p>
//       <p>lastname : {formData.lastname}</p>
//       <p>email: {formData.email}</p>
//       <p>password: {formData.password} </p>

//       {isSubmitted ? (
//         <div>
//           <h1>Form data</h1>
//           <p>{formData.email}</p>
//           <p>{formData.firstname}</p>
//           <p>{formData.lastname}</p>
//         </div>
//       ) : null}
//       <h1>ello</h1>h
//     </div>

//   );
// }

// export default App;

// // import React, { useState } from 'react';
// // import { Eye, EyeOff } from 'lucide-react';
// // function App() {
// //   const [isActive, setIsActive] = useState(true);
// //   const [isLoggedIn, setIsLogged] = useState(true);
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isShow, setIsShow] = useState(false);
// //   const handleClick = () => {
// //     setIsActive(!isActive); //toggle karna
// //   };
// //   const handleIsLoggedIn = () => {
// //     setIsLogged(!isLoggedIn);
// //   };
// //   const userName = 'amit';
// //   return (
// //     <div>
// //       {isActive ? (
// //         <h1 style={{ color: isActive && 'green' }}> User is active</h1>
// //       ) : (
// //         <h1 style={{ color: !isActive && 'red' }}>user is not active</h1>
// //       )}
// //       {isLoggedIn ? <h1>Hi ritesh , welcome back</h1> : <h1>Please Login</h1>}

// //       {isOpen && <h1>Model is open</h1>}
// //       {!isOpen && <h1>Mode is not open</h1>}
// //       <h1>{userName || 'ritesh'}</h1>

// //       <button onClick={handleIsLoggedIn}>
// //         {isLoggedIn ? 'Logout' : 'Login'}
// //       </button>
// //       <button onClick={handleClick}>toggle</button>

// //       <input type={isShow ? 'text' : 'password'} />
// //       {isShow ? (
// //         <div onClick={() => setIsShow(false)}>
// //           <Eye />
// //         </div>
// //       ) : (
// //         <div
// //           onClick={() => {
// //             setIsShow(true);
// //           }}
// //         >
// //           <EyeOff />
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;

// // // //if else

// import React from 'react';
// import { useState } from 'react';
// function App() {
//   const [step, setStep] = useState(1);

//   const handleStepIncrease = () => {
//     setStep((prev) => {
//       return prev + 1;
//     });

//     // setStep(2)
//   };

//   const handlePreviousClick = () => {
//     setStep((prev) => prev - 1);
//   };
//   return (
//     <form>
//       <h3 style={{ color: step === 1 ? 'green' : 'black' }}>Name Details</h3>
//       <h3 style={{ color: step === 2 ? 'green' : 'black' }}>
//         Password Details
//       </h3>
//       <h3 style={{ color: step === 3 ? 'green' : 'black' }}>
//         Marksheet Details
//       </h3>
//       {step === 1 && (
//         <>
//           <input type="" placeholder="enter your name" />
//           <input type="" placeholder="enter your lastname" />
//           <button onClick={handleStepIncrease}>Next</button>
//         </>
//       )}

//       {step === 2 && (
//         <>
//           <input type="passowrd" placeholder="enter your password" />
//           <input type="number" placeholder="enter your age" />
//           <button onClick={handleStepIncrease}>Next</button>
//           <button onClick={handlePreviousClick}>Prev</button>
//         </>
//       )}

//       {step === 3 && (
//         <>
//           <label>Upload marksheet</label>
//           <input type="file" />
//           <button onClick={handlePreviousClick}>Prev</button>
//           <button>Submit Form</button>
//         </>
//       )}
//     </form>
//   );
// }

// export default App;

// import React , {useState , useEffect} from 'react'

// function App() {
//   const [name , setName] = useState('test')

//   useEffect(()=>{
//     console.log('only runs when component intially render')
//     fetch('https://dummyjson.com/products').then((res)=>res.json()).then(data=>data)
//   },[]); //mounting phase

//   useEffect(()=>{
//     console.log('name value updatedd...')
//   }  , [name]); //updating phase

//   useEffect(()=>{
//     console.log('helloooooooooooo')
//   }) ;

//   //unmount phase

//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>App components</h1>
//       <p>hello</p>
//       <p>hello</p>
// <button onClick={()=>setName('ritesh')}>click</button>

//     </div>
//   )
// }

// export default App

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [user, setUser] = useState(null)
 
//     useEffect(() => {
//       fetch('https://dummyjson.com/products')
//         .then((res) => res.json())
//         .then((data) => setUser(data));
//     },[]);
//     const showAlert = (data) => {
//       alert(data)
//     }
//     return <div>{user?.name}
    

//     <button onClick={()=>{showAlert('hello')}}></button>
//     </div>

// }

// export default App

//NOTE Rendering , re-rendering
//NOTE Mount phase , Unmount Phase , Update phase (component lifeCycle useEffect handle krskte h
//NOTE useEffect handle the component sideEffects(dataFetching , direct dom manipulation , timers);
//NOTE Jsx , Components , Jsx vs Html , What is react , What is single page application , Event Handling , Form Handling , use-state , List-Rendering , Conditional-Rendering....
//NOTE Mini project => data fetching pro , todo list , tree like folder structure , what is hooks ?? hooks are the functions which allow us to use or hook into react features..

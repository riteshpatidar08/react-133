import { createContext, useContext } from 'react';
import { useState , } from 'react';
import { MovieContext } from './MovieContext';



export const NameContext = createContext();


// console.log(NameContext.Provider)
export const NameProvider = ({ children }) => {
  // const {movies} = useContext(MovieContext)
  const [name, setName] = useState("NEXTJS");
  // console.log(movies)
  
  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
      {/* app  */}
    </NameContext.Provider>
  );
};



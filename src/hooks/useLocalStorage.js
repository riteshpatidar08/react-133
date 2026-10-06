import React, { useState } from 'react';

function useLocalStorage(key, initialValue) {
  console.log(key);
  const [storedValue, setStoredValue] = useState('');

  const setValue = () => {
    localStorage.setItem(key, JSON.stringify(initialValue));
  };
  const getValue = () => {
    const value = localStorage.getItem(key);
    console.log(value);
    setStoredValue(JSON.parse(value));
  };

  return [setValue, storedValue, getValue];
}

export default useLocalStorage;


//NOTE => manually crud likha aaana chaiye todo  (starting edit operation)
//NOTe => data fetching useEffect , [] 
//NOTE list rendering  (data list  + key prop) ;
//NOTE condition (loading , error , data ); (loading , error screen , data screen)
//NOTE PAGINATION manually krna aana chiaye; (dummy json products api)
//NOTE refactor useReducer + rendering  + rerendering + lifting the state up ;
//NOTE virutal dom , props , event handling , contrlled components and uncontrolled components 
//NOTE custom hooks 
//NOTE protected routes (login , signup , open routes), dynmaic routing (order section , order details chlaa), nested routing (dashboard)
//NOTE libraries integation 
//NOTE  component design krna (pattern);
//NOTE admin => users / orders /  aggregation /charts / graphs / login /signup
//NOTE ----------------------------------------------------------------------------
//NOTE Explain the rules of using the react hooks ?
//NOTE Why not to use index as a key while rendering list in react ? 
//NOTE What are the best practices to break a large react components in to resuable components 
//NOTE How to pass data from child to parent ?
//NOTE What is the module css pattern  ?
//NOTE Class components overview how they are different from functional components / why we replace them with functional component / how lifecycle methods works in the class component 
//NOTE statefull vs stateless , class and functional component 
//NOTE  ------------------------------------------------------------------------------


//NOTE  useRef , controlled and uncontrolled components , forwardRef , higher order components , useMemo , memo , useCallback , useLayoutEffect , react server component , useOptimistic , use hook , redux toolkit code spilliting lazy loading , error boundaries 
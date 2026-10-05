

import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue){ 

  const [data, setData] =useState(() =>{
    const stredData = localStorage.getItem(key);
    if(stredData){
      return JSON.parse(stredData);
    }
    return initialValue;  
  });

  useEffect(() =>{
    localStorage.setItem(key, JSON.stringify(data));
  },[key, data]);

  return [data, setData];
}

export default useLocalStorage;
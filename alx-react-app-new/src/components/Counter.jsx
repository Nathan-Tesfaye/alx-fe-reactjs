import React from "react";
import { useState } from "react";

function Counter () {
  
  const [count, setCount] = useState(0);
  
  return (
    <>
      <button onClick={ () => {
        setCount(count + 1)
      }}>Increment</button>
      
      <button onClick={ () => {setCount(count - 1)}}>Decrement</button>

      <button onClick={ () => {setCount(0)}}>Reset</button>
      
      <p>{count}</p>
    </>
  );
}

export default Counter ;
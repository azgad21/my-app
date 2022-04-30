import React from 'react';
import {useState} from 'react';


const Counter = () => {

    const [counter, setCounter] = useState(0)
  // let counter = 8

  const increment = () => setCounter( counter + 1 )
  const decrement = () => setCounter( counter - 1 )
  

    return (
        <div>
      <h2>{counter}</h2>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={increment}>Incrementar</button> 
        </div>
    );
};

export default Counter;
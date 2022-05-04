import React from 'react';
import { useState, useEffect } from 'react';

const MayoDos = () => {
    
    const [counter, setCounter] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#F9F871", "#FFC75F"];
      document.body.style = `background: ${
        colors[Math.floor(Math.random() * colors.length)]
      }`;
      // Esto se va a ejecutar cuando "counter" cambie
    }, [counter]);
  
    console.log("limbo");

    return (
        <div>
           <h2>{counter}</h2>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <div>
        <input type={isVisible ? "text" : "password"} />
        <button onClick={() => setIsVisible(!isVisible)}>Show / hidde</button>
      </div> 
        </div>
    );
};

export default MayoDos;
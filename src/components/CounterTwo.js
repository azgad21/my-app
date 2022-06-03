import React, { useState } from 'react';

const CounterTwo = () => {

    const [counter, setCounter] = useState(14);

  const decrement = () => setCounter(counter - 1);
  const increment = () => setCounter(counter + 1);

    return (
        <div>

            <h1>{counter}</h1>
            <button onClick={decrement}>decrementar</button>
            <button onClick={increment}>incrementar</button>
            
        </div>
    );
};

export default CounterTwo;
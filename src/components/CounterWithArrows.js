import React, {useState} from 'react';

const CounterWithArrows = () => {

    const [counter, setCounter] = useState(10);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

    return (
        <div>
            
            <h1>{counter}</h1>
                 <button onClick={decrement}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                <button onClick={increment}>
                    <i className="fas fa-arrow-right"></i>
                </button>

        </div>
    );
};

export default CounterWithArrows;
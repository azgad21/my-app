import { useState } from "react";


const useCounter = (intialValue) => {

    const [ counter, setCounter ] = useState( intialValue );

    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)

    return {increment, decrement, counter}
};

export default useCounter;
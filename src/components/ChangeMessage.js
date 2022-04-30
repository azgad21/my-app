import React from 'react';
import {useState} from 'react';


const ChangeMessage = () => {

    const [change, setChange] = useState ("Primer mensaje")

    const changem = () => setChange ("Se cambio el mensaje")


    return (
        <div>
            <h2>{change}</h2>
            <button onClick={changem}>Click para cambiar mensaje</button>
        </div>
    );
};

export default ChangeMessage;
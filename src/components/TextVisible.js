import React from 'react';
import {useState} from 'react';


const TextVisible = () => {

    const [ isVisible, setIsVisible ] = useState(false)
    const changeVisible = () => setIsVisible(!isVisible)

    return (
        <div>
            <h1>input de contraseña</h1>
            <input type={isVisible ? "text" : "password"} />
            <button onClick={changeVisible}>Mostrar / Ocultar</button>
        </div>
    );
};

export default TextVisible;
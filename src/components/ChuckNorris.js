import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ChuckNorris = () => {

    const [ chuck, setChuck ] = useState({})
    // const chuck = {}

    useEffect(() => {
        axios.get("https://api.chucknorris.io/jokes/random")
             .then(res => setChuck(res));
    }, [])

    const changeJoke = () => {
        axios.get("https://api.chucknorris.io/jokes/random")
             .then(res => setChuck(res))
    }


    return (
        <div>
            <h1>Chuck Norris</h1>
            <p>{chuck.data?.value}</p>
            <button onClick={changeJoke}>Change Joke</button>
        </div>
    );
};

export default ChuckNorris;
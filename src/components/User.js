import React, { useState } from 'react';
import users from '../users.json'


const colors = ["red", "lightblue", "yellow", "lightgreen", "lightcoral"]


const User = () => {

    const randomIndex = Math.floor(Math.random() * users.length)
    const [index, setIndex] = useState(randomIndex) 

    const changeUser = () => {
        const randomIndex = Math.floor(Math.random() * users.length)
        setIndex(randomIndex)
    }

    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`;


    return (
        <div className='card' style={{color: colors[randomColor]}}>
            <h2>
                {users[index].name.title} {users[index].name.first} {users[index].name.last}
            </h2>
            <img src={users[index].picture.large} alt="" />
            <div className="info">
            <div><i className="fa-solid fa-envelope"></i> {users[index].email}</div>
            <div><i className="fa-solid fa-phone"></i> {users[index].cell} </div>
            <div><i className="fa-solid fa-location-dot"></i> {users[index].location.country} {users[index].location.state} {users[index].location.city} </div>
            </div>
            <button onClick={changeUser}>Cambiar usuario</button>       
        </div>
    );
};

export default User;
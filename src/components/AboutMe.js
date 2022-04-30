import React from 'react';

const AboutMe = ({nombre}) => {
    return (
        <div className='card'>
            <h3>Sobre mi</h3>
            <ul>
                <li>{nombre}</li>
                <li>edad: 19 años</li>
                <li>musica: hiphop</li>
                <li>movie: avatar</li>
            </ul>
        </div>
    );
};

export default AboutMe;
import React from 'react';
                                        // "blue"
const Card = ({ title="Titulo por defecto", item1, item2, item3, background }) => {


    return (
        <div className="card" style={{background: background}}>
            <h2>{title}</h2>
            <ul>
                <li>{item1}</li>
                <li>{item2}</li>
                <li>{item3}</li>
            </ul>
        </div>
    );
};

export default Card;
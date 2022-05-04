import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ApiConsumption = () => {

    const [ image, setImage ] = useState({})

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos/1')
      .then(res => setImage(res.data));
  }, []);
  
  console.log(image);

    return (
        <div>
            Hello world
      <h1>{image.title}</h1>
        </div>
    );
};

export default ApiConsumption;
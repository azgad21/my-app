import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Emoji = () => {

    const [emoji, setEmoji] = useState({});

  useEffect(() => {
    axios
      .get("https://api.emojisworld.fr/v1/random?limit=1")
      .then((res) => setEmoji(res.data));
  }, []);

  const changeEmoji = () =>{
    axios
    .get("https://api.emojisworld.fr/v1/random?limit=1")
    .then((res) => setEmoji(res.data));
  }

    return (
        <div>
            <h2>{emoji.results?.[0].name}</h2>
            <p>{emoji.results?.[0].emoji}</p> 
            <button onClick={changeEmoji}>Change Emoji</button>
        </div>
    );
};

export default Emoji;
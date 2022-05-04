import './App.css';
import{ useState, useEffect } from 'react';
import Color from './components/Color';

function App() {

    const [showColor, setShowColor] = useState(true)


  return (
    <div className="App">

      <button onClick={() => setShowColor(!showColor)}>Mostrar/Oultar color</button>
      {
        showColor ? <Color/> : null
      }

    </div>
  );
}

export default App;
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('olive'); // State to track the selected color

  // useEffect to update the body background color whenever 'color' changes
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]); // The effect will run whenever 'color' changes

  return (
    <>
      <div id='colorDiv'>
        <button id='red' onClick={() => setColor('red')}>Red</button>
        <button id='green' onClick={() => setColor('green')}>Green</button>
        <button id='yellow' onClick={() => setColor('yellow')}>Yellow</button>
        <button id='blue' onClick={() => setColor('blue')}>Blue</button>
        <button id='black' onClick={() => setColor('black')}>Black</button>
        <button id='orange' onClick={() => setColor('orange')}>Orange</button>
        <button id='olive' onClick={() => setColor('olive')}>Olive</button>
        <button id='purple' onClick={() => setColor('purple')}>Purple</button>
      </div>
    </>
  );
}

export default App;

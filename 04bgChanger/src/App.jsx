import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState(''); // State to track the selected color

  const changeColor = (color) => {
    setColor(color); // Update the state with the selected color
    document.body.style.backgroundColor = color; // Change the background color of the body
  }

  return (
    <>
    <div id='colorDiv'>
      <button id='red' onClick={() => changeColor('red')}>Red</button>
      <button id='green' onClick={() => changeColor('green')}>Green</button>
      <button id='yellow' onClick={() => changeColor('yellow')}>Yellow</button>
      <button id='blue' onClick={() => changeColor('blue')}>Blue</button>
      <button id='black' onClick={() => changeColor('black')}>Black</button>
      <button id='orange' onClick={() => changeColor('orange')}>Orange</button>
      <button id='olive' onClick={() => changeColor('olive')}>Olive</button>
      <button id='purple' onClick={() => changeColor('purple')}>Purple</button>
      </div>
    </>
  );
}

export default App;

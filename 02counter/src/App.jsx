import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  // let counter=5

  const addValue = () => {
    counter=counter+1;
    setCounter(counter)
  };

  const subtractValue = () => {
    counter=counter-1;
    setCounter(counter)
  };
  

  return (
    <>
      <h1>React Counter Project</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={subtractValue}>Remove Value</button>
    </>
  )
}

export default App

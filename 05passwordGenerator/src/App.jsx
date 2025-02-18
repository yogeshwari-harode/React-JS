import { useState , useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumbewrAllowed]=useState(false)
  const [charAllowed, setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  //useRef hook
  const passwordRef=useRef(null)
  
  const passwordGenerator = useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*-_+=[]{}~`"

    for(let i=1 ; i<=length ; i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed,setPassword])
    
  //copy password to clipboard
  const copyPassword=useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      
      <div className='div1' >
        <h1>Password Generator</h1>
        <div className='inputArea'>
          <input type="text" value={password} placeholder='Password' ref={passwordRef}/>
          <button className='copybtn' onClick={copyPassword}>copy</button>
        </div>
        
        <div className='bottomArea'>
            <div className='lengthElement'>
              <input type="range" className='cursor-pointer' min={8} max={20} value={length} onChange={(e) => {setLength(e.target.value)}} />
              <label>Length: {length}</label>
            </div>
        

          <div className='numberElement'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() =>{
              setNumbewrAllowed((prev) => !prev);
            }}/>
            <label>Numbers</label>
          </div>

          <div className='CharecterElement'>
            <input type="checkbox" defaultChecked={charAllowed} id='characterInput' onChange={() =>{
              setCharAllowed((prev) => !prev);
            }}/>
            <label>Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

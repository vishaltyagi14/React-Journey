import { useState,useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [len,setlen]= useState(8)
  const [numAllowed,setNumberAllowed]= useState(false)
  const [charAllowed,setCharAllowed]= useState(false)
  const [password,setPassword]=useState("")

  const passwordGenerator =()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*(){}[]"

    for(let i=1;i<len;i++){
      let randomChar =Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(randomChar)
    }
    setPassword(pass)
  }

  const copyToClip =()=>{
    copyPass.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  const passwordGenerated = useCallback(passwordGenerator,[len,numAllowed,charAllowed,setPassword])


  useEffect(()=>{
    passwordGenerated()
  },[len,numAllowed,charAllowed,passwordGenerated])

  const copyPass=useRef(null)
  return (
    <>
    <div className="wrapper">
      <div className="main">
    <h3>Password Generator</h3>
       <div className="inputs">
         <input 
        type="text" 
        value={password}
         readOnly 
         placeholder='Password'
         id="inputBox" 
         ref={copyPass}
         />
         <button id='copyBtn'
         onClick={copyToClip}
         title='Copy To ClipBoard'
         >Copy</button>
       </div>

      <div className="attr">
        <div className="slider">
          <input type="range" max={100} min={8} 
          onChange={(e)=>{setlen(e.target.value)}}
          value={len}
          />
          <label>Length: {len}</label>
        </div>

        <div className="checkBox">
          <input type="checkbox" 
          defaultChecked={numAllowed}
           onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}
          />
          <label >Numbers</label>
        </div>

        <div className="checkBox">
          <input type="checkbox" 
          defaultChecked={charAllowed}
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}
          />
          <label >Characters</label>
        </div>
      </div>

      </div>
    </div>
    </>
  )
}

export default App

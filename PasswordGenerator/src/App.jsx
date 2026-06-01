import { useState,useCallback } from 'react'
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
  const passwordGenerated = useCallback(passwordGenerator,[len,numAllowed,charAllowed,setPassword])
  return (
    <>
    
    </>
  )
}

export default App

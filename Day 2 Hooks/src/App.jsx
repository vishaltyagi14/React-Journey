import {useState} from 'react'
import './App.css'

function App() {
let [Counter,setCounter]=useState(0);

let increase =()=>{
  setCounter(Counter+1)
}
let decrease =()=>{
  if(Counter>0){
    setCounter(Counter-1)
  }
}

let ClickFn=()=>{
  confirm("You are an asshole bitch")
}
  return (
    <>
    <button id='click' onClick={ClickFn}>Click me</button>
    <div className="main">
      <button></button>
      <div className="display">
        <h2>{Counter}</h2>
      </div>
      <div className="btns">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
    </>
  )
}

export default App

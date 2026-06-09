import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase =()=>{
    setCount(count+1)
  }

  return (
    <>
    <div className="main">
    <button onClick={increase}>Click me Bro</button>
    <h1>You clicked {count} times Asshole</h1>
    </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { ExpensiveCalc } from './component/ExpensiveCalc'

function App() {
  const [count, setCount] = useState(0)

  const increase =()=>{
    setCount(count+1)
  }

  return (
    <>
    <div className="main">
    <ExpensiveCalc></ExpensiveCalc>
    <button onClick={increase}>Click me Bro</button>
    <h1>You clicked {count} times Asshole</h1>
    </div>
    </>
  )
}

export default App

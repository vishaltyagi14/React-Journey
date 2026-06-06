import { useState } from 'react'
import './App.css'
import themBtn from './components/themBtn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <themBtn></themBtn>
    </>
  )
}

export default App

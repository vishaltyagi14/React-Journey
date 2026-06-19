import { useState } from 'react'
import './App.css'
import SimpleForm from './components/SimpleForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SimpleForm />
    </>
  )
}

export default App

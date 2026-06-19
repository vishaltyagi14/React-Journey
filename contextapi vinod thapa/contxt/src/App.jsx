import { useState,useContext } from 'react'
import './App.css'
import { ContextProvider, OnlyContext } from './context/Contxt'

const Child =()=>{
  const {name,age} = useContext(OnlyContext)
  return <h1>Hello this is {name} and my age is {age}</h1>
}
function App() {
  return (
    <>
    <ContextProvider>
      <Child/>
    </ContextProvider>
    </>
  )
}

export default App

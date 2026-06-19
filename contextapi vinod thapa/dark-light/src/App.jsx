import { useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import { ContextProvider } from './context/Context'

function App() {

  return (
    <ContextProvider>
    <ThemeBtn></ThemeBtn>
    </ContextProvider>
  )
}

export default App

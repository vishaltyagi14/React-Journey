import { useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import { ContextProvider } from './context/Context'
import Card from './components/Card'

function App() {

  return (
    <ContextProvider>
    <ThemeBtn></ThemeBtn>
    <Card></Card>
    </ContextProvider>
  )
}

export default App

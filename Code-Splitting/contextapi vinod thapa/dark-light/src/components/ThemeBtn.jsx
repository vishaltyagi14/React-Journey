import React, { useContext } from 'react'
import { OnlyContext,ContextProvider } from '../context/Context'


const themBtn = () => {
    const {theme,setThemeFn}=useContext(OnlyContext)
  return (
    <>
    <button onClick={setThemeFn}>
    <h1>Current Theme: {theme}</h1>
    </button>
    </>
  )
}

export default ThemeBtn
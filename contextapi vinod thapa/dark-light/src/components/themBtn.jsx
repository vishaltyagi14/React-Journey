import React, { useContext } from 'react'
import { OnlyContext } from '../context/Context'

const themBtn = () => {
    const {theme,setThemeFn}=useContext(OnlyContext)
  return (
    <>
    <h1>Current Theme: {theme}</h1>
    </>
  )
}

export default themBtn
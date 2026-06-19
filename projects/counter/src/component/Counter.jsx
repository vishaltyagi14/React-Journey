import React, { useContext, useReducer } from 'react'
import { OnlyContext } from '../Context/ContextP'
import "./counter.css"

const Counter = () => {
    const {counter,dispatch}=useContext(OnlyContext)
  return (
    <div className='mainDiv'>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
    </div>
  )
}

export default Counter
import React, { useEffect, useRef, useState } from 'react'

const useThrottle = (data,delay) => {
  const [value, setValue] = useState(data)
  const lastExecuted= useRef(Date.now());
  
  useEffect(()=>{
    const timeout1 = setTimeout(()=>{
        const now= Date.now();
        const ElapsedTime= now- lastExecuted.current;
        if(ElapsedTime>=delay){
            setValue(data)
            lastExecuted.current=now;
        }

    },delay-(Date.now()-lastExecuted.current))

    return ()=> clearTimeout(timeout1)
  },[data,delay])

  return value
}

export default useThrottle
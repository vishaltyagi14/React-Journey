import React, { useEffect, useState } from 'react'

const useDebounce = (inputText,delay) => {
  const [value, setValue] = useState("")
  useEffect(() => {
    let timeout= setTimeout(()=>{
        setValue(inputText)
    },delay)

    return ()=> clearTimeout(timeout)
  }, [inputText])

  return value
  
}

export default useDebounce
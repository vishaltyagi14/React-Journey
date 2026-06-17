import React, { useEffect, useState } from 'react'

const useDeboounce = (inputText,delay) => {
  const [value, setValue] = useState("")

  useEffect(()=>{
    const timeout=setTimeout(()=>{
        setValue(inputText)
    },delay)

    return ()=> clearTimeout(timeout)
  },[inputText])

  return value
}

export default useDeboounce
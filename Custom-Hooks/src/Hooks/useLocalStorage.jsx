import React, { useState } from 'react'

const useLocalStorage = (key,initialValue) => {
    const [value, setValue] = useState(()=>{
        const data = localStorage.getItem(key)

        if(data) return data
        return initialValue
    })

    const setStored=(value)=>{
        setValue(value)
        localStorage.setItem(key,value)
    }

    return [value,setStored]
}

export default useLocalStorage
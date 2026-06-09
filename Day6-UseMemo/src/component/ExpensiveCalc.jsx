import React, { useMemo } from 'react'

export const ExpensiveCalc = () => {
    let sum=0;
    const sum1=()=>{
        for(let i=0;i<=10000000;i++){
            sum+=i;
        }
        return sum;
    }
    let total =useMemo(()=>sum1(),[])
  return (
    <h1>The Total is: {total}</h1>
  )
}

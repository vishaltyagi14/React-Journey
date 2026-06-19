import { createContext, useContext,useReducer } from "react";
import React from "react";

export const OnlyContext=createContext()
const reducer=(state,action)=>{
    if(action.type==="Increment") return state+1;
    else if(action.type==="Decrement") {
        if(state>0)return state-1;
    }
    return state
}
export const ContextProvider=({children})=>{
     const [counter, dispatch] = useReducer(reducer, 0)

    return <OnlyContext.Provider value={{counter,dispatch}}>{children}</OnlyContext.Provider>
}
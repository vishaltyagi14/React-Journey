import React from "react";
import { useState } from "react";

export const OnlyContext = React.createContext();

export const ContextProvider =({children})=>{
    const [theme, setTheme] = useState("light")

    const setThemeFn =()=>{
        setTheme((prev)=>(prev==="light"?"dark":"light"))
    }
    return(
        <OnlyContext.Provider value={{theme,setThemeFn}}>{children}</OnlyContext.Provider>
    )

}
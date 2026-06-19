import React from "react";

export const OnlyContext= React.createContext();

export const ContextProvider=({children})=>{

    let name = "Vishal"
    let age =21
    return <OnlyContext.Provider value={{name,age}}>{children}</OnlyContext.Provider>
}
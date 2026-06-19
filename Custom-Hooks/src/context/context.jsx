import { createContext, useContext } from "react";

export const OnlyContext = createContext();

export const ContextProvider=({children})=>{
    const name="Vishal"
    const age= 18
    return(
        <OnlyContext.Provider value={{name,age}}>
            {children}
        </OnlyContext.Provider>
    )
}

export const useOnlyContext=()=>{
    const context= useContext(OnlyContext)
    return context
}
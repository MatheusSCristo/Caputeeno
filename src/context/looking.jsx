import React,{createContext,useState} from "react";
export const LookingContext= createContext([])


function LookingProvider({children}){
    const [lookingFor,setLookingFor]=useState()
    
    return(
        <LookingContext.Provider value={{lookingFor,setLookingFor}}>
            {children}
        </LookingContext.Provider> 
    )
}

export default LookingProvider
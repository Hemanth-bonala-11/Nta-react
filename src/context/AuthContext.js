import { createContext, useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [login,setLogin]=useState(false);
    async function varifyCookies(){
        
    }





    const value={
        login,
        setLogin

    }

    return <AuthContext.Provider value={value}>
    {children}

    </AuthContext.Provider>

}

import { useContext, createContext } from "react";  

const AuthContext = createContext();

function AuthProvider({children, value}) {

    return <AuthContext.Provider value={value}> { children} </AuthContext.Provider>
}

function useAuthValue() {
    
    return useContext(AuthContext);
}


export {AuthProvider, useAuthValue}
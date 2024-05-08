
// import { useContext, createContext } from "react";  

// const AuthContext = createContext();

// function AuthProvider({children, value}) {
//     console.log(value)
//     return <AuthContext.Provider value={value}> { children} </AuthContext.Provider>
// }

// function useAuthValue() {
//     console.log(AuthContext);
//     return useContext(AuthContext);
// }


// export {AuthProvider, useAuthValue}


import { useContext, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children, value }) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthValue() {

    return useContext(AuthContext);
}
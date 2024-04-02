import { useState, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [userAuth, setUserAuth] = useState(false);
    const login = () => {
        setUserAuth(true);
    };
    const logout = () => {
        setUserAuth(false);
    };
    return (

        <AuthContext.Provider value={{userAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
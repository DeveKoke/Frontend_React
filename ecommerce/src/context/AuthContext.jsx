import { useState, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [userAuth, setUserAuth] = useState(false);
    const [adminAuth, setAdminAuth] = useState(false);

    const userLogin = () => {
        setUserAuth(true);
    };
    const userLogout = () => {
        setUserAuth(false);
    };
    const adminLogin = () => {
        setAdminAuth(true);
    }
    const adminLogout =() => {
        setAdminAuth(false);
    }
    return (

        <AuthContext.Provider value={{userAuth, userLogin, userLogout, adminAuth, adminLogin, adminLogout}}>
            {children}
        </AuthContext.Provider>
    )
}
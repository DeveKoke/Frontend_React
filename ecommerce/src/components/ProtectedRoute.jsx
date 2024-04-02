import { Navigate } from "react-router-dom";
import { useAuth } from "../customHooks/useAuth";

function ProtectedRoute({children}){
    const {userAuth} = useAuth();

    return userAuth ? children : <Navigate to={'/login'}/>;
}

export default ProtectedRoute;
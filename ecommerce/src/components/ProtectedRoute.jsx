import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../customHooks/useAuth";

function ProtectedRoute({children}){
    const {userAuth} = useAuth();

    const location = useLocation();

    return userAuth ? children : <Navigate to={'/login'} state={location}/>;
}

export default ProtectedRoute;
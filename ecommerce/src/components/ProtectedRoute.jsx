import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../customHooks/useAuth";

function ProtectedRoute({children}){
    const {userAuth, adminAuth } = useAuth();

    const location = useLocation();

    return userAuth || adminAuth ? children : <Navigate to={'/login'} state={location}/>;
}

export default ProtectedRoute;
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname);

    if (user) {
        return children;
    }
    if (loading) {
        return <div></div>
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoute;
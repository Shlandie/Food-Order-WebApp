import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    useEffect(() => {
        console.log("auth is working");
        console.log(auth.isAdmin);
    }, [])

    return (
        auth.isAdmin
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />




    );
}

export default RequireAuth;

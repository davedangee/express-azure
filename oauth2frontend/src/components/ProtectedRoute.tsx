import {JSX, useContext} from "react";
import { Navigate } from "react-router-dom";
import {AuthContext} from "../context/AuthContext.tsx";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);
    return auth?.user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;

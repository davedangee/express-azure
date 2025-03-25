import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext, AuthProvider} from "./context/AuthContext.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import axios from "axios";

const Home = () => {
    const auth = useContext(AuthContext);
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">Welcome to the App</h1>
            {auth?.user ? (
                <>
                    <p className="mt-2">Logged in as: {auth.user.name} ({auth.user.email})</p>
                    <button onClick={auth.logout} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Logout</button>
                </>
            ) : (
                <button onClick={auth?.login} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Login with Azure</button>
            )}
        </div>
    );
};

const ProtectedPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">Protected Page</h1>
            <p className="mt-2">You have accessed a protected route.</p>
        </div>
    );
};

const App = () => {
    const [authenticated, setAuthenticated] = useState<string>("not authenticated");

    const checkAuthentication = () => {
        axios.get("/auth/test")
            .then((res) => setAuthenticated("authenticated"))
            .catch(() => {
                setAuthenticated("not authenticated");
            });
    }

    return (
        <>
            <button onClick={() => checkAuthentication()}>Check authentication</button>
            <p>{authenticated}</p>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/protected" element={<ProtectedRoute><ProtectedPage /></ProtectedRoute>} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>

    );
};

export default App;

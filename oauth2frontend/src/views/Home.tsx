import {AuthContext} from "../context/AuthContext.tsx";
import {useContext} from "react";

export const Home = () => {
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
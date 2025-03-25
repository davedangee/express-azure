import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

type User = {
    name: string;
    email: string;
};

type AuthContextType = {
    user: User | null;
    login: () => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        axios.get("/auth/me").then((res) => setUser(res.data.user)).catch(() => setUser(null));
    }, []);

    const login = () => {
        window.location.href = "/auth/login"; // Redirects user to Azure login
    };

    const logout = async () => {
        await axios.get("/auth/logout");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

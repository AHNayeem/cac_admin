import React, { createContext, useState, useEffect } from 'react';
// import { getToken, logout, register as registerService } from '../services/authService';
import { jwtDecode } from 'jwt-decode';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ token: null, user: null });
    const [loading, setLoading] = useState(true);

    // Check token on app start
    useEffect(() => {
        // const token = getToken();
        // console.log("🚀 ~ useEffect ~ token:", token)
        // if (token) {
        //     const user = jwtDecode(token);
        //     console.log("🚀 ~ useEffect ~ user:", user)
        //     setAuth({ token, user });
        // }
        setLoading(false);
    }, []);

    const loginUser = (token) => {
        // const user = jwtDecode(token);
        // console.log("🚀 ~ loginUser ~ user:", user)
        // setAuth({ token, user });
    };

    const register = async (userData) => {
        // console.log("🚀 ~ register ~ userData:", userData)
        // const data = await registerService(userData);
        // console.log("🚀 ~ register ~ data:", data)
        // setAuth({ token: data.token, user: jwtDecode(data.token) });
    };

    const logoutUser = () => {
        // logout();
        setAuth({ token: null, user: null });
    };

    return (
        <AuthContext.Provider value={{ auth, loginUser, logoutUser, loading, register }}>
            {children}
        </AuthContext.Provider>
    );
};

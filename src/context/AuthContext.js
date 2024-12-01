import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
    // Initialize state from localStorage or defaults
    const [auth, setAuth] = useState(() => {
        const token = localStorage.getItem('authToken');
        const user = JSON.parse(localStorage.getItem('user'));
        return token ? { isAuthenticated: true, user, token } : { isAuthenticated: false, user: null, token: null };
    });

    // Sync localStorage changes on auth state change
    useEffect(() => {
        if (auth.isAuthenticated) {
            localStorage.setItem('authToken', auth.token);
            localStorage.setItem('user', JSON.stringify(auth.user));
        } else {
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
        }
    }, [auth]);

    // Login function
    const login = (user, token) => {
        setAuth({ isAuthenticated: true, user, token });
    };

    // Logout function
    const logout = () => {
        setAuth({ isAuthenticated: false, user: null, token: null });
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        // navigate('/login'); // Redirect to login page

    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

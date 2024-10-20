import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Assuming AuthContext provides authentication state

const PublicRoute = () => {
    const { auth } = useContext(AuthContext);

    // If the user is authenticated, redirect to the dashboard
    return auth && auth.token ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;

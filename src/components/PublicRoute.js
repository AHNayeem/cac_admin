// import React, { useContext } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext'; // Assuming AuthContext provides authentication state

// const PublicRoute = () => {
//     const { auth } = useContext(AuthContext);

//     // If the user is authenticated, redirect to the dashboard
//     return auth && auth.token ? <Navigate to="/" /> : <Outlet />;
// };

// export default PublicRoute;


import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicRoute = ({ layout }) => {
    const { auth } = useAuth();

    if (auth.isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return React.cloneElement(layout, { children: <Outlet /> });
};

export default PublicRoute;

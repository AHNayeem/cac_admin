// import React, { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { Navigate, Outlet } from 'react-router-dom';
// // import CircularProgress from '@mui/material/CircularProgress';

// const ProtectedRoute = () => {
//     const { auth, loading } = useContext(AuthContext);
//     console.log("🚀 ~ ProtectedRoute ~ auth:", auth)

//     if (loading) {
//         return (
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
//                 {/* <CircularProgress /> */}
//             </div>
//         );
//     }

//     if (!auth || !auth.token) {
//         return <Navigate to="/login" />;
//     }

//     return <Outlet />;
// };

// export default ProtectedRoute;


import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Assuming you're using an Auth Context

const ProtectedRoute = ({ layout }) => {
    const { auth } = useAuth();

    if (!auth.isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return React.cloneElement(layout);
};

export default ProtectedRoute;

// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import AdminLayout from '../layouts/AdminLayout';

// const ProtectedRoute = () => {
//     const { auth } = useAuth();

//     return auth.isAuthenticated ? <AdminLayout /> : <Navigate to="/login" />;
// };

// export default ProtectedRoute;

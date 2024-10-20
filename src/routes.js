import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute'; // Import the new PublicRoute
import AgentLayout from './pages/agent/AgentLayout';
import OperatorLayout from './pages/operator/OperatorLayout';
import PassengerLayout from './pages/passenger/PassengerLayout';
import DriverLayout from './pages/driver/DriverLayout';
import PageNotFound from './pages/PageNotFound';
import VehicleLayout from './pages/vehicle/VehicleLayout';
import SubAdminLayout from './pages/sub-admin/SubAdminLayout';
import SettingLayout from './pages/setting/SettingLayout';
import TripLayout from './pages/trip/TripLayout';
import RequestLayout from './pages/update-request/RequestLayout';

// Lazy load pages
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Login = lazy(() => import('./pages/signin/Login'));

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Protected routes for authenticated users */}
          {/* <Route element={<ProtectedRoute />}> */}
          <Route element={<AdminLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/agent" element={<AgentLayout />} />
            <Route path="/operator" element={<OperatorLayout />} />
            <Route path="/driver" element={<DriverLayout />} />
            <Route path="/passenger" element={<PassengerLayout />} />
            <Route path="/vehicle" element={<VehicleLayout />} />
            <Route path="/sub-admin" element={<SubAdminLayout />} />
            <Route path="/setting" element={<SettingLayout />} />
            <Route path="/trip-history" element={<TripLayout />} />
            <Route path="/update-request" element={<RequestLayout />} />
          </Route>
          {/* </Route> */}

          {/* Public routes for non-authenticated users */}
          {/* <Route element={<PublicRoute />}> */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
          {/* </Route> */}

          {/* Catch-all route for 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;

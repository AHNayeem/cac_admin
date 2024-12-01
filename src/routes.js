import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute'; // For authenticated routes
import PublicRoute from './components/PublicRoute'; // For unauthenticated routes
import AgentLayout from './pages/agent/AgentLayout';
import OperatorLayout from './pages/operator/OperatorLayout';
import PassengerLayout from './pages/passenger/PassengerLayout';
import DriverLayout from './pages/driver/DriverLayout';
import VehicleLayout from './pages/vehicle/VehicleLayout';
import SubAdminLayout from './pages/sub-admin/SubAdminLayout';
import SettingLayout from './pages/setting/SettingLayout';
import TripLayout from './pages/trip/TripLayout';
import RequestLayout from './pages/update-request/RequestLayout';
import MassMessageLayout from './pages/mass-message/MassMessageLayout';
import IssueReportLayout from './pages/issue-report/IssueReportLayout';
import ServiceTypeLayout from './pages/service-type/ServiceTypeLayout';
import ReferralLayout from './pages/referral/ReferralLayout';
import DispatcherLayout from './pages/dispatcher/DispatcherLayout';
import PaymentLayout from './pages/payment/PaymentLayout';
import PageNotFound from './pages/PageNotFound';

// Lazy load pages
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Login = lazy(() => import('./pages/signin/Login'));

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Protected Routes for Authenticated Users */}
          <Route element={<ProtectedRoute layout={<AdminLayout />} />}>
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
            <Route path="/mass-message" element={<MassMessageLayout />} />
            <Route path="/issue-report" element={<IssueReportLayout />} />
            <Route path="/service-type" element={<ServiceTypeLayout />} />
            <Route path="/dispatcher" element={<DispatcherLayout />} />
            <Route path="/payment" element={<PaymentLayout />} />
            <Route path="/referral" element={<ReferralLayout />} />
          </Route>

          {/* Public Routes for Unauthenticated Users */}
          <Route element={<PublicRoute layout={<AuthLayout />} />}>
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Catch-all route for 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;

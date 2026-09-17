/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router';
import { MainLayout } from './layout/MainLayout';
import { Welcome } from './pages/Welcome';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Jobs } from './pages/Jobs';
import { AIAssistant } from './pages/AIAssistant';
import { Pricing } from './pages/Pricing';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Admin } from './pages/Admin';
import { MockInterview } from './pages/MockInterview';
import { Learning } from './pages/Learning';
import { ResumeTools } from './pages/ResumeTools';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Games } from './pages/Games';
import { Certificate } from './pages/Certificate';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const hasVisited = localStorage.getItem('hasVisitedCareerSphere');
  if (!hasVisited) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}

function AuthRequiredRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return <>{children}</>;
}

function PaywallRoute({ children }: { children: React.ReactNode }) {
  const { hasPremiumAccess, isAuthenticated } = useAuth();
  const location = useLocation();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  
  if (!hasPremiumAccess()) {
    return <Navigate to="/pricing" state={{ from: location.pathname }} replace />;
  }
  
  return <>{children}</>;
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  const { isDeveloper, isAuthenticated } = useAuth();
  
  if (!isAuthenticated || !isDeveloper) {
    return <Navigate to="/home" replace />;
  }
  
  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
            {/* Free/Public Routes within Layout */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobs" element={<Jobs />} />
            
            {/* Requires Login but Free */}
            <Route path="/pricing" element={<AuthRequiredRoute><Pricing /></AuthRequiredRoute>} />
            <Route path="/dashboard" element={<AuthRequiredRoute><Dashboard /></AuthRequiredRoute>} />
            
            {/* Paywalled Premium Routes (Requires Login + Subscription/Trial/Developer) */}
            <Route path="/ai-assistant" element={<PaywallRoute><AIAssistant /></PaywallRoute>} />
            <Route path="/mock-interview" element={<PaywallRoute><MockInterview /></PaywallRoute>} />
            <Route path="/learning" element={<PaywallRoute><Learning /></PaywallRoute>} />
            <Route path="/resume-tools" element={<PaywallRoute><ResumeTools /></PaywallRoute>} />
            <Route path="/games" element={<PaywallRoute><Games /></PaywallRoute>} />
            <Route path="/certificate" element={<PaywallRoute><Certificate /></PaywallRoute>} />
            <Route path="/student-mode" element={<PaywallRoute><div className="p-8 text-center text-slate-500">College Student Mode Module</div></PaywallRoute>} />
            <Route path="/international" element={<PaywallRoute><div className="p-8 text-center text-slate-500">International Careers Module</div></PaywallRoute>} />
            
            {/* Admin Route */}
            <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}


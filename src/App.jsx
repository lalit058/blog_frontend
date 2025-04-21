import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import AuthForm from './Components/AuthForm.jsx';
import Home from './Components/Home.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';

export default function App() {
  return (
    <>
    <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<AuthForm />} />
          
          {/* Redirect any /dashboard requests to /home */}
          <Route path="/dashboard" element={<Navigate to="/home" replace />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </AuthProvider>
    </>
  );
}
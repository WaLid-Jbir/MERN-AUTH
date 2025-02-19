import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/authStore';

import FloatingShape from './components/FloatingShape';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import EmailVerificationPage from './pages/EmailVerificationPage';
import DashboardPage from './pages/DashboardPage';

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {

  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated || !user.isVerified) {
    return <Navigate to='/login' replace />;
  }

  if (!user.isVerified) {
    return <Navigate to='/verify-email' replace />;
  }

  return children;
}

// redirect authenticated users to home page
const RedirectAuthenticatedUser = ({ children }) => {

  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to='/' replace />;
  }

  return  children;
}

function App() {

  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log('isAuthenticated:', isAuthenticated);
  console.log('user:', user);

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center relative overflow-hidden'>
      <FloatingShape color='bg-blue-400' size='w-64 h-64' top='-5%' left='10%' delay={0} />
      <FloatingShape color='bg-blue-300' size='w-48 h-48' top='70%' left='80%' delay={5} />
      <FloatingShape color='bg-blue-200' size='w-32 h-32' top='40%' left='-10%' delay={2} />
      <FloatingShape color='bg-blue-100' size='w-24 h-24' top='20%' left='50%' delay={2} />

      <Routes>
        {/* Your routes here */}
        <Route path="/" element={ 
            <ProtectedRoute>
              <DashboardPage /> 
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/login" element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
      </Routes>
      
      {/* Toaster for displaying notifications */}
      <Toaster />
    </div>
  );
}

export default App;
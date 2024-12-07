import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Track authentication status

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get('http://localhost:5000/check-session', {
          withCredentials: true,  // This ensures cookies are sent
        });
        setIsAuthenticated(true); // User is authenticated
      } catch (error) {
        console.error('Session check failed:', error.response?.data?.message || error.message);
        setIsAuthenticated(false); // User is not authenticated
      }
    
    };

    checkSession();
  }, []);

  if (isAuthenticated === null) {
    // Show a loading spinner or placeholder while authentication status is being checked
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

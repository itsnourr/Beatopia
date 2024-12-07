import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/authUtils';
import { isTokenExpired } from '../../utils/authUtils';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!isAuthenticated() || isTokenExpired(token)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

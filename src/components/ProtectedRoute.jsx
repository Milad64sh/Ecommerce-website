import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserAuthContext from '../userAuthcontext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserAuthContext);
  if (!user) {
    return <Navigate to='/auth' />;
  }
  return children;
};

export default ProtectedRoute;

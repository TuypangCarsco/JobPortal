import { useUser } from '@clerk/clerk-react';
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();
  const { pathname } = useLocation();

 
  if (!isLoaded) {
    return null; 
  }


  if (!isSignedIn) {
    return <Navigate to="/?sign-in=true" state={{ from: pathname }} />;
  }

  
  return children;
};

export default ProtectedRoutes;

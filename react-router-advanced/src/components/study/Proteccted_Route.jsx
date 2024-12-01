import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';



const isAuthenticated = () => {
  return  localStorage.getItem("authToken") === null;
}

function Protected_Route() {
  return (
    isAuthenticated() ? <Outlet /> : <Navigate to = "/" />
  )
}

export default Protected_Route
import React from "react";
import { Route, Redirect } from "react-router-dom";

// Function that checks if the user is authenticated
const isAuthenticated = () => {
  // Replace with your actual authentication logic
  return localStorage.getItem("authToken") !== null;
};

// Custom Route component for protected routes
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          // Render the component if authenticated
          <Component {...props} />
        ) : (
          // Redirect to the login page if not authenticated
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;

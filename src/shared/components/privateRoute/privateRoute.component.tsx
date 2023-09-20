import React from "react";
import { Navigate, Route } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ComponentType<any>;
  isAuthenticated: boolean;
  path: string;
  roles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Component, isAuthenticated, roles, path }) => {
  const userRoles = ["ADMIN", "TEACHER", "PARENT", "STUDENT"]; // получаем роли например во время авторизации
  const isAuthorized = userRoles.some((role) => roles.includes(role));
  return isAuthenticated && isAuthorized ? (
    <Route key={path} path={path} element={<Component />} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;

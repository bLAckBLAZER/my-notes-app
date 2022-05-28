import { useAuth } from "../contexts";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = () => {
  const { authState } = useAuth();

  const location = useLocation();

  return authState.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

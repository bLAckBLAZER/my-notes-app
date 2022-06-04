import { useAuth } from "../contexts";
import { Outlet, Navigate } from "react-router-dom";

export const Redirect = () => {
  const { authState } = useAuth();

  return authState.token ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

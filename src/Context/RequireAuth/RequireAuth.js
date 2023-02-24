import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../Auth-context/Auth-context";

const RequireAuth = () => {
  const { tokenData } = useAuth();
  const location = useLocation();
  return tokenData ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};

export { RequireAuth };

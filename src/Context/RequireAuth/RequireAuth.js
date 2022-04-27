import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Auth-context/Auth-context";

const RequireAuth = ({ children }) => {
  const { isAuth } = useAuth();
  const location = useLocation();
  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace></Navigate>
  );
};

export { RequireAuth };

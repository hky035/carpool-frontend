import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = () => {
  const authContext = useAuth();
  const isLogin = authContext.isLogined;

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

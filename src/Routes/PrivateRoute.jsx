import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Loader from "../Components/Shared/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <Loader />;
  if (user) return children;
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoute;

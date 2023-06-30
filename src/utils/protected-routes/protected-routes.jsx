import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoutes = () => {
  const auth = sessionStorage.getItem("JWT");
  const location = useLocation();

  if (!auth) return <Navigate to="/login" state={{ from: location }} />;

  return <Outlet />;
};

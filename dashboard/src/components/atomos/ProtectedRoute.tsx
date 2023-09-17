import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../Hooks/useUser";

const ProtectedRoute = ({
  children,
  redirectTo = "/login",
}: {
  children?: React.ReactNode;
  redirectTo?: string;
}) => {
  const { user, loadingUser } = useUser();
  if (loadingUser)
    return (
      <div className="w-screen h-screen bg-background text-background">
        Loading ...
      </div>
    );
  if (!user) return <Navigate to={redirectTo} replace />;
  return <>{children}</>;
};

export default ProtectedRoute;

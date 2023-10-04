import { Navigate, Outlet, useLocation } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import { useEffect, useState } from "react";
import { useGetAccessLazyQuery } from "schema";

type PropsProtectedRoute = {
  children?: React.ReactNode;
  redirectTo?: string;
};

const ProtectedRoute = ({
  children,
  redirectTo = "/login",
}: PropsProtectedRoute) => {
  const [access, setAccess] = useState(false);
  const [getAccess] = useGetAccessLazyQuery();
  const { user, loadingUser } = useUser();
  const pathname = useLocation().pathname;
  const protectedRoutes = ["/", "perfil", "/servicios"];

  const verifyAccess = () => {
    !loadingUser &&
      user &&
      getAccess({
        variables: { sportCenterId: user.uid },
        nextFetchPolicy: "no-cache",
        onCompleted: (data) => {
          setAccess(data.getAccess);
        },
        onError: (error) => {
          alert("No eres admin" + JSON.stringify(error));
        },
      });
  };
  useEffect(() => {
    verifyAccess();
  }, []);

  if (loadingUser && user === undefined && !access) {
    return <Navigate to={redirectTo} replace />;
  } else {
    if (protectedRoutes.includes(pathname)) {
      return <Navigate to={pathname} replace />;
    }
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;

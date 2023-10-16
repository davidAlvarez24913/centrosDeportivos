import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import { useEffect, useState } from "react";
import { useGetAccessLazyQuery } from "schema";
import Loading from "./Loading";

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

  if (loadingUser) {
    return <Loading />;
  } else {
    if (!access) {
      return children ? <>{children}</> : <Outlet />;
    } else {
      return <Navigate to={redirectTo} replace />;
    }
  }
};

export default ProtectedRoute;

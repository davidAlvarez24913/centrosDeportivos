import { Navigate, Outlet } from "react-router-dom";
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
  console.log("user load:", loadingUser, "user: ", user, "access: ", access);

  const verifyAccess = () => {
    !loadingUser &&
      user &&
      getAccess({
        variables: { sportCenterId: user.uid },
        nextFetchPolicy: "no-cache",
        onCompleted: (data) => {
          console.log("ejecutandose");
          console.log(data);
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
  }
  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;

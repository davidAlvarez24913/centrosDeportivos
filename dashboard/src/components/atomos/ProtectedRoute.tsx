import { Navigate } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import { useEffect, useState } from "react";
import { useGetAccessLazyQuery } from "schema";

const ProtectedRoute = ({
  children,
  redirectTo = "/login",
  regist,
  login,
}: {
  children?: React.ReactNode;
  redirectTo?: string;
  regist?: Boolean;
  login?: Boolean;
}) => {
  const [getAccess] = useGetAccessLazyQuery();
  const [access, setAccess] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    console.log(user);
    console.log("PROTECTED");
    console.log(redirectTo);
    user &&
      regist !== true &&
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
  }, [user]);

  if (user === undefined && regist) {
    return <>{children}</>;
  }
  if (user && regist) {
    return <Navigate to={redirectTo} replace />;
  }
  if (user && login && access)
    return (
      <>
        <Navigate to={"/"} replace />
      </>
    );
  if (login) return <>{children}</>;

  if (user === undefined && !access) {
    return <Navigate to={redirectTo} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;

import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import { useEffect, useState } from "react";
import { useGetAccessLazyQuery } from "schema";
import Loading from "./Loading";
import LinkLogo from "./LinkLogo";

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
    return (
      <div className="w-screen h-screen p-auto bg-background">
        <div className="flex flex-col items-center  w-screen h-screen">
          <div className="flex flex-1 items-center justify-around">
            <h3 className="text-2xl font-medium text-primary">Cargando</h3>
            <img
              src={`/icons/loading-green.svg`}
              alt="loading"
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>
    );
  } else {
    if (user === undefined && !access) {
      return <Navigate to={redirectTo} replace />;
    } else {
      return children ? <>{children}</> : <Outlet />;
    }
  }
};

export default ProtectedRoute;

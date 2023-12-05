import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import { useEffect, useState } from "react";
import { useGetAccessLazyQuery, useIsAdminLazyQuery } from "schema";
import { toast } from "react-toastify";

type PropsProtectedRoute = {
  children?: React.ReactNode;
  redirectTo?: string;
};

const ProtectedRoute = ({
  children,
  redirectTo = "/login",
}: PropsProtectedRoute) => {
  const [access, setAccess] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [getAccess] = useGetAccessLazyQuery();
  const { user, loadingUser } = useUser();
  const [isAdminQuery] = useIsAdminLazyQuery();

  const verifyAccess = () => {
    !loadingUser &&
      user &&
      isAdminQuery({
        variables: { adminId: user.uid! },
        onCompleted: (status) => {
          if (status.isAdmin) {
            setIsAdmin(true);
          } else {
            getAccess({
              variables: { sportCenterId: user.uid },
              nextFetchPolicy: "no-cache",
              onCompleted: (data) => {
                setAccess(data.getAccess);
              },
              onError: (error) => {
                toast.error("No eres admin" + error.message, {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              },
            });
          }
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
    if (isAdmin) {
      return children ? <>{children}</> : <Outlet />;
    } else {
      if (user === undefined && !access) {
        return <Navigate to={redirectTo} replace />;
      } else {
        return children ? <>{children}</> : <Outlet />;
      }
    }
  }
};

export default ProtectedRoute;

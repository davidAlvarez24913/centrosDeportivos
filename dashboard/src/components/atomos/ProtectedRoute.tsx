import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "@firebase/auth";
import { auth } from "../Firebase";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  children,
  redirectTo = "/login",
}: {
  children?: React.ReactNode;
  redirectTo?: string;
}) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(undefined);
      }
    });

    return () => {
      // Desinscribirse de la detección de cambios en la autenticación al desmontar el componente
      unsubscribe();
    };
  }, []);
  console.log("usercontext APP", user);

  if (user === undefined) return <Navigate to={redirectTo} />;
  return children ? children : <Outlet />;
};

export default ProtectedRoute;

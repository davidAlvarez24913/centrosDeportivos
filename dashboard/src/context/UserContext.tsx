import React, { useEffect, useState } from "react";
import { onAuthStateChanged, User, Auth } from "@firebase/auth";
import { auth } from "../components/Firebase";
import { SignIn } from "../components/Firebase";
import { signOut } from "@firebase/auth";

interface UserContextProps {
  user: User | undefined;
  handleSignIn: (email: string, password: string) => Promise<void>;
  handleSignOut: (auth: Auth) => Promise<void>;
}
export const UserContext = React.createContext<UserContextProps | undefined>(
  {} as UserContextProps
);
export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
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

  const handleSignIn = async (email: string, password: string) => {
    try {
      await SignIn(email, password);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };
  const handleSignOut = async (auth: Auth) => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  return (
    <UserContext.Provider value={{ user, handleSignIn, handleSignOut }}>
      {children}
    </UserContext.Provider>
  );
};

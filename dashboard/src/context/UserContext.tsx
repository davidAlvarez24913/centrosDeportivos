import React, { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "@firebase/auth";
import { auth } from "../Firebase";
import { SignIn } from "../Firebase";
import { signOut } from "@firebase/auth";

export interface UserContextProps {
  user: User | undefined;
  handleSignIn: (email: string, password: string) => Promise<void>;
  handleSignOut: () => Promise<void>;
  loadingUser: boolean;
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
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        setLoadingUser(false);
      } else {
        setUser(undefined);
        setLoadingUser(false);
      }
      console.log("fun unsubscribe,user: ", user);
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
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  return (
    <UserContext.Provider
      value={{ user, handleSignIn, handleSignOut, loadingUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

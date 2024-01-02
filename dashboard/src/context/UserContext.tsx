import React, { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "@firebase/auth";
import { auth, SignIn, CreateUser, DeleteUser } from "../Firebase";
import { signOut, UserCredential } from "@firebase/auth";

export interface UserContextProps {
  user: User | undefined;
  handleCreateUser: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined>;
  handleSignIn: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined>;
  handleSignOut: () => Promise<void>;
  handleDeleteUser: () => Promise<void>;
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
      console.log(user);
      if (authUser) {
        setUser((prevState) => prevState ?? authUser);
        setLoadingUser(false);
      } else {
        setUser(undefined);
        setLoadingUser(false);
      }
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreateUser = async (email: string, password: string) => {
    const newUser = await CreateUser(email, password);
    return newUser;
  };
  const handleDeleteUser = async () => {
    try {
      await DeleteUser();
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };
  const handleSignIn = async (email: string, password: string) => {
    const newUser = await SignIn(email, password);
    return newUser;
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
      value={{
        user,
        handleSignIn,
        handleSignOut,
        loadingUser,
        handleCreateUser,
        handleDeleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

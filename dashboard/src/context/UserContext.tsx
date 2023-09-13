import React, { useState } from "react";
import { User } from "@firebase/auth";

type UserContextProps = {
  user: User;
  setUser: (user: User) => void;
};
export const UserContext = React.createContext({} as UserContextProps);
export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User>({} as User);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

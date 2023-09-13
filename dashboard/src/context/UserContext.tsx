import React, { useState } from "react";
import { User } from "@firebase/auth";

type UserContextProps = {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
};
export const UserContext = React.createContext<UserContextProps>(
  {} as UserContextProps
);
export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User>();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

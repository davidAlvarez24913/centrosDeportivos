import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { User } from "@firebase/auth";

const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  const handleSetUser = (user: User | undefined) => {
    setUser(user);
  };
  return [user, handleSetUser] as const;
};

export default useUser;

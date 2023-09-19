import { useContext } from "react";
import { UserContext, UserContextProps } from "../context/UserContext";

const useUser = () => {
  const context = useContext(UserContext);

  return { ...context } as UserContextProps;
};

export default useUser;

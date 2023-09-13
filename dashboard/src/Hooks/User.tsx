import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  const setUserFunction = () => setUser(user);
  return { user, setUserFunction };
};

export default useUser;

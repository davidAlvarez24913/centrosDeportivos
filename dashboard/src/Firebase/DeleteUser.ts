import { deleteUser } from "@firebase/auth";
import auth from "./authConfig";

const DeleteUser = async () => {
  const newUser = await deleteUser(auth.currentUser!);
  return newUser;
};
export default DeleteUser;

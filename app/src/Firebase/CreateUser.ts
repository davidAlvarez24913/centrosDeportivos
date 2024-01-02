import { createUserWithEmailAndPassword } from "@firebase/auth";
import auth from "./authConfig";

const CreateUser = async (email: string, password: string) => {
  const newUser = await createUserWithEmailAndPassword(auth, email, password);
  return newUser;
};
export default CreateUser;

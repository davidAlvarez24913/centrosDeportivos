import { signInWithEmailAndPassword } from "@firebase/auth";
import auth from "./authConfig";

const SignIn = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
};
export default SignIn;

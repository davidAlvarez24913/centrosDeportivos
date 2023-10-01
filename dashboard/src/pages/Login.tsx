import { useEffect, useState } from "react";
import {
  CustomButton,
  CustomInput,
  CustomInputWithIcon,
} from "../components/atomos";
import { FirebaseError } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import { useGetAccessLazyQuery } from "schema";
import useUser from "../Hooks/useUser";

const LoginPage = () => {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { handleSignOut, handleSignIn, user, loadingUser } = useUser();
  const [getAccess, { ...status }] = useGetAccessLazyQuery();

  const verifyAccess = () => {
    !loadingUser &&
      user &&
      getAccess({
        variables: { sportCenterId: user.uid },
        nextFetchPolicy: "no-cache",
        onCompleted: () => {
          console.log("ejecutandose");
          navigate("/");
        },
        onError: (error) => {
          alert("No eres admin" + JSON.stringify(error));
        },
      });
  };
  useEffect(() => {
    verifyAccess();
  }, [loadingUser]);

  if (loadingUser) {
    return (
      <div className="w-screen h-screen bg-background">
        <div className="flex flex-row items-center justify-center content-center py-[50%]">
          <h4 className="text-primary text-xl">Cargando</h4>
          <img
            src="/icons/loading-green.svg"
            alt="loading"
            className="w-10 h-10"
          />
        </div>
      </div>
    );
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSignIn(userInput.email, userInput.password)
      .then((newUser) => {
        getAccess({
          variables: { sportCenterId: newUser?.user.uid! },
          nextFetchPolicy: "no-cache",
          onCompleted: (data) => {
            if (data.getAccess) {
              navigate("/");
            } else {
              handleSignOut();
              alert("No eres admin" + JSON.stringify(data));
            }
          },
          onError: (error) => {
            alert(error);
          },
        });
      })

      .catch((error) => {
        setError((error as FirebaseError).code);
      });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };
  return (
    <div className="w-screen h-screen bg-background fixed m-auto flex items-center justify-center">
      <form
        className="flex flex-col border-2 rounded-2xl max-w-xl w-full h-96 border-primary gap-5 p-6 items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex items-end ">
          <img
            src="/icons/logo.svg"
            alt="logo"
            width={52}
            height={56}
            className="text-customText  pb-1"
          />
          <p className="text-customText -left-2  font-semibold text-2xl">
            asTas
          </p>
        </div>
        <CustomInput
          placeholder="Correo electronico"
          color="white"
          type="email"
          name="email"
          onChange={handleChange}
          errorMessage={
            error === "auth/user-not-found"
              ? "Usuario incorrecto, intenta de nuevo!"
              : error === "auth/invalid-email"
              ? "Email invalido"
              : ""
          }
        />
        <CustomInputWithIcon
          isPassword
          placeholder="Contraseña"
          color="white"
          name="password"
          onChange={handleChange}
          errorMessage={
            error === "auth/wrong-password"
              ? "Contraseña incorrecta, intenta de nuevo!"
              : ""
          }
        />
        <CustomButton
          color="sucessfull"
          title="Iniciar Sesion"
          type="submit"
          disable={status.loading}
        />
        <a href="/register" className="text-white">
          Registrarse
        </a>
      </form>
    </div>
  );
};

export default LoginPage;

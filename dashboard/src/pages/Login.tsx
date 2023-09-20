import { useState } from "react";
import { CustomButton, CustomInput } from "../components/atomos";
import { SignIn } from "../Firebase";
import { FirebaseError } from "@firebase/util";
import { Navigate, useNavigate } from "react-router-dom";
import { useGetAccessLazyQuery } from "schema";
import useUser from "../Hooks/useUser";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");
  const [visible, setVisible] = useState<"text" | "password">("password");
  const navigate = useNavigate();
  const { user, handleSignOut } = useUser();
  const [getAccess, { ...status }] = useGetAccessLazyQuery();
  console.log("user login", user);

  if (user && status.data?.getAccess?.valueOf)
    return <Navigate to={"/reservaciones"} replace />;

  return (
    <div className="w-screen h-screen bg-background fixed m-auto flex items-center justify-center">
      <div className="flex flex-col border-2 rounded-2xl border-primary gap-5 p-6 items-center justify-center">
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
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          errorMessage={
            error === "auth/user-not-found"
              ? "Usuario incorrecto, intenta de nuevo!"
              : error === "auth/invalid-email"
              ? "Email invalido"
              : ""
          }
        />
        <CustomInput
          placeholder="Contraseña"
          color="white"
          type={visible}
          name="password"
          onChange={(e) => {
            setPass(e.currentTarget.value);
          }}
          errorMessage={
            error === "auth/wrong-password"
              ? "Contraseña incorrecta, intenta de nuevo!"
              : ""
          }
          onClickIcon={() => {
            visible === "password" && setVisible("text");
            visible === "text" && setVisible("password");
          }}
        />
        <CustomButton
          color="sucessfull"
          title="Iniciar Sesion"
          type="button"
          disable={status.loading}
          onClick={async () => {
            console.log("click");
            try {
              const response = await SignIn(email, password);
              getAccess({
                variables: { sportCenterId: response.user.uid },
                onCompleted: (data) => {
                  if (data.getAccess?.valueOf) {
                    navigate("/reservaciones");
                  } else {
                    handleSignOut();

                    alert("No eres admin" + JSON.stringify(data));
                    console.log(user);
                  }
                },
                onError: (error) => {
                  alert(error);
                },
              });
            } catch (error) {
              console.log(error);
              setError((error as FirebaseError).code);
            }
          }}
        />
      </div>
    </div>
  );
};

export default LoginPage;

import { useCreateAdminMutation, useIsAdminQuery } from "schema";
import { LayoutPage } from "../components/moleculas";
import { toast } from "react-toastify";
import {
  CustomButton,
  CustomInput,
  CustomInputWithIcon,
  Loading,
} from "../components/atomos";
import useUser from "../Hooks/useUser";
import { useState } from "react";
import { FirebaseError } from "@firebase/util";
import { CreateUser } from "../Firebase";

const CreateAdmins = () => {
  const user = useUser();
  const [createAdminMutation, { loading }] = useCreateAdminMutation();
  const [error, setError] = useState("");
  const [registData, setRegistData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    CreateUser(registData.email, registData.password)
      .then((user) => {
        createAdminMutation({
          variables: { userId: user?.user.uid! },
          onCompleted: () => {
            toast.success("Centro deportivo creado correctamente", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          },
        });
      })
      .catch((error) => {
        setError((error as FirebaseError).code);
      });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegistData({ ...registData, [event.target.name]: event.target.value });
  };
  const isAdmin = useIsAdminQuery({
    variables: { adminId: user?.user?.uid || "" },
  });
  const flag = registData.password !== registData.confirmPassword;
  const flag2 = registData.password.length < 6;
  return (
    <LayoutPage nameSportCenter={"Admin"}>
      {isAdmin.loading ? (
        <Loading />
      ) : isAdmin?.data?.isAdmin ? (
        <div>
          <h2 className="text-xl font-bold">Crear Administradores</h2>
          <form
            className="flex flex-col gap-4 py-4 w-1/2 "
            onSubmit={(e) => handleSubmit(e)}
          >
            <CustomInput
              label="Correo electronico"
              placeholder="Correo electronico"
              color="blue"
              type="email"
              name="email"
              required
              onChange={handleChange}
              errorMessage={
                error === "auth/email-already-in-use"
                  ? "Correo electronico ya registrado"
                  : ""
              }
            />
            <CustomInputWithIcon
              isPassword
              label="Contraseña"
              placeholder="Contraseña"
              color="blue"
              name="password"
              required
              onChange={handleChange}
              errorMessage={
                flag2 ? "La contraseña debe tener minimo 6 caracteres" : ""
              }
            />
            <CustomInputWithIcon
              isPassword
              label="Confirmar Contraseña"
              placeholder="Confirmar Contraseña"
              color="blue"
              name="confirmPassword"
              onChange={handleChange}
              required
              errorMessage={flag ? "Las contraseñas deben coincidir" : ""}
            />
            <CustomButton
              color="sucessfull"
              title="Crear administrador"
              type="submit"
              loading={loading}
              disable={flag || flag2}
            />
          </form>
        </div>
      ) : (
        <h2>No tiene acceso a estas funciones</h2>
      )}
    </LayoutPage>
  );
};

export default CreateAdmins;

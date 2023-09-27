import React, { useState } from "react";
import {
  CustomButton,
  CustomInput,
  CustomInputWithIcon,
} from "../components/atomos";
import { useCreateSportCenterMutation } from "schema";
import { CreateUser, DeleteUser } from "../Firebase";
const Register = () => {
  const [createSportCenterMutation] = useCreateSportCenterMutation();
  const [registData, setRegistData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    CreateUser(registData.email, registData.password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        const sportCenter = {
          sportCenterId: userId,
          name: registData.name,
          email: registData.email,
          description: "",
          access: false,
          image: "",
          phone: "",
          ubication: "",
          schedule: "",
          ranking: 0,
        };
        createSportCenterMutation({
          variables: { input: sportCenter },
        })
          .then((data) => {
            alert("Centro deportivo creado correctamente");
          })
          .catch((error) => {
            alert(error);
            DeleteUser();
          });
      })
      .catch((error) => {
        console.log(error.code);
        error.code === "auth/email-already-in-use" &&
          alert("Correo electronico ya registrado");
      });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegistData({ ...registData, [event.target.name]: event.target.value });
  };
  const flag = registData.password !== registData.confirmPassword;
  const flag2 = registData.password.length < 6;
  return (
    <div className="w-screen h-screen bg-background fixed m-auto flex items-center justify-center">
      <div className="flex flex-col border-2 rounded-2xl max-w-xl w-full border-primary gap-3 p-6 items-center justify-center">
        <div className="flex items-end">
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
        <form
          className="flex flex-col gap-4 py-4 w-full"
          onSubmit={(e) => handleSubmit(e)}
        >
          <CustomInput
            type="text"
            color="white"
            name="name"
            label="Nombre del Centro Deportivo"
            placeholder="Nombre del Centro Deportivo"
            required
            onChange={handleChange}
          />
          <CustomInput
            label="Correo electronico"
            placeholder="Correo electronico"
            color="white"
            type="email"
            name="email"
            required
            onChange={handleChange}
          />
          <CustomInputWithIcon
            isPassword
            label="Contraseña"
            placeholder="Contraseña"
            color="white"
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
            color="white"
            name="confirmPassword"
            onChange={handleChange}
            required
            errorMessage={flag ? "Las contraseñas deben coincidir" : ""}
          />
          <CustomButton
            color="sucessfull"
            title="Registrarse"
            type="submit"
            disable={flag || flag2}
          />

          <a href="/login" className="text-white self-center">
            Iniciar Sesión
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;

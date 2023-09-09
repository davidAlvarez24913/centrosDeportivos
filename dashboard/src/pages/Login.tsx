import { CustomButton, CustomInput } from "../components/atomos";

const LoginPage = () => {
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
        />
        <CustomInput
          placeholder="Contraseña"
          color="white"
          type="password"
          errorMessage="Escribe bien wevon, no es tu contraseña :)"
        />
        <CustomButton color="sucessfull" title="Iniciar Sesion" type="button" />
      </div>
    </div>
  );
};

export default LoginPage;

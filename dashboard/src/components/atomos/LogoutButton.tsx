import { useNavigate } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import CustomButton from "./CustomButton";

const LogoutButton = () => {
  const nav = useNavigate();
  const { handleSignOut } = useUser();
  return (
    <div className="px-3 pb-10">
      <CustomButton
        color="cancel"
        title="salir"
        type="button"
        onClick={() => {
          handleSignOut();
          nav("/login");
        }}
      />
    </div>
  );
};

export default LogoutButton;

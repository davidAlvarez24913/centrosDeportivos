import useUser from "../../Hooks/useUser";
import CustomButton from "./CustomButton";

const LogoutButton = () => {
  const { handleSignOut } = useUser();
  return (
    <div className="px-3 pb-10">
      <CustomButton
        color="cancel"
        title="salir"
        type="button"
        onClick={() => {
          handleSignOut();
        }}
      />
    </div>
  );
};

export default LogoutButton;

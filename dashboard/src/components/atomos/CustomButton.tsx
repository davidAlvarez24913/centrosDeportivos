type ProsCustomButton = {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  color: "sucessfull" | "cancel" | "outline";
  type: "button" | "submit" | "reset";
  id?: string;
  disable?: boolean;
  loading?: boolean;
};
function CustomButton({
  title,
  onClick,
  color,
  type,
  id,
  disable,
  loading,
}: ProsCustomButton) {
  let styleColor = "";
  if (color === "cancel") styleColor = "bg-cancel text-customText";
  if (color === "sucessfull") styleColor = "bg-primary text-background";
  if (color === "outline")
    styleColor = "bg-transparent border-2 border-primary  text-primary ";
  return (
    <button
      id={id}
      onClick={onClick}
      type={type}
      disabled={disable}
      className={`rounded-xl w-full text-xl font-medium h-10 ${styleColor}`}
    >
      {title}
      {loading && <p>laoding ... xd</p>}
    </button>
  );
}

export default CustomButton;

type ProsCustomButton = {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  color: "sucessfull" | "cancel" | "blue" | "outline";
  type: "button" | "submit" | "reset";
  id?: string;
  disable?: boolean;
  loading?: boolean;
  addIcon?: boolean;
};
function CustomButton({
  title,
  onClick,
  color,
  type,
  id,
  disable,
  loading,
  addIcon,
}: ProsCustomButton) {
  let styleColor = "";
  if (color === "cancel") styleColor = "bg-error text-customText";
  if (color === "sucessfull") styleColor = "bg-primary text-background";
  if (color === "blue") styleColor = "bg-background  text-customText ";
  if (color === "outline")
    styleColor = "bg-transparent border-2 border-background text-background ";
  return (
    <button
      id={id}
      onClick={onClick}
      type={type}
      disabled={disable}
      className={`flex flex-row justify-center items-center gap-4 rounded-xl w-full text-xl font-medium h-10 px-4 ${styleColor}`}
    >
      <p className="uppercase text-lg">{title}</p>
      {addIcon && <img src="/icons/add-bold.svg" alt="add icon" />}
      {loading && <p>laoding ... xd</p>}
    </button>
  );
}

export default CustomButton;

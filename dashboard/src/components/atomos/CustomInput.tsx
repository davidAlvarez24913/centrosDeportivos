type PropsCustomInput = {
  label?: string;
  color: "white" | "blue";
  errorMessage?: string;
  onClickIcon?: () => void;
  pathSVG?: string;
} & React.ComponentProps<"input">;

const CustomInput = ({
  label,
  color,
  pathSVG,
  errorMessage,
  onClickIcon,
  ...rest
}: PropsCustomInput) => {
  const auxIcon = "/icons/eye-outline.svg";
  const flagIcon = !(rest.type === "password") && pathSVG !== undefined;
  const onClick = () => {};

  const styleBlue = color === "blue" && " border-background";
  const styleWhite = color === "white" && " border-customText";
  const placeholderBlue =
    color === "blue" && "text-background placeholder-background font-normal";
  const placeholderWhite =
    color === "white" && "text-customText placeholder-customText font-light";
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          className={`${styleBlue}  ${styleWhite} text-lg font-bold`}
          htmlFor={label?.replaceAll(" ", "_")}
        >
          {label}
        </label>
      )}
      <div
        className={`${styleBlue}  ${styleWhite} flex w-full rounded-xl border-2 py-1 px-3`}
      >
        <input
          className={`bg-transparent outline-none ${styleBlue}  ${styleWhite} ${placeholderBlue}  ${placeholderWhite}  `}
          {...rest}
          name={label?.replaceAll(" ", "_")}
          placeholder={rest.placeholder}
        />
        {flagIcon && <img src={pathSVG} alt={pathSVG} />}
        {rest.type === "password" && (
          <img src={auxIcon} alt={auxIcon} onClick={onClickIcon ?? onClick} />
        )}
      </div>
      {errorMessage && (
        <p className="text-red-400 text-xs px-4">{errorMessage as string}</p>
      )}
    </div>
  );
};

export default CustomInput;

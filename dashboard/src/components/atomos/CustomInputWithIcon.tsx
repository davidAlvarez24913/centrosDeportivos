import { useState } from "react";

type PropsCustomInputWithIcon = {
  label?: string;
  color: "white" | "blue";
  errorMessage?: string;
  pathSVG?: string;
  isPassword: boolean;
} & React.ComponentProps<"input">;

const CustomInputWithIcon = ({
  label,
  color,
  pathSVG,
  errorMessage,
  isPassword,
  ...rest
}: PropsCustomInputWithIcon) => {
  const [visible, setVisible] = useState<"text" | "password">("password");
  const auxIcon = "icons/eye-closed-outline.svg";
  const auxIcon2 = "icons/eye-outline.svg";
  const flagIcon = !(rest.type === "password") && pathSVG !== undefined;
  const styleBlue = color === "blue" && " border-background";
  const styleWhite = color === "white" && "text-white border-customText";
  const placeholderBlue =
    color === "blue" && "text-background placeholder-background font-normal";
  const placeholderWhite =
    color === "white" && "text-customText placeholder-customText font-light";

  return (
    <div className="flex flex-col w-full gap-1">
      {label && (
        <label
          className={`${styleBlue}  ${styleWhite} text-lg font-semibold`}
          htmlFor={label?.replaceAll(" ", "_")}
        >
          {label}
        </label>
      )}
      <div
        className={`${styleBlue}  ${styleWhite} flex w-full rounded-xl border-2 py-1 px-3`}
      >
        <input
          className={`bg-transparent outline-none w-full ${styleBlue}  ${styleWhite} ${placeholderBlue}  ${placeholderWhite}  `}
          type={visible}
          {...rest}
          id={label?.replaceAll(" ", "_")}
          placeholder={rest.placeholder}
        />
        {!flagIcon && <img src={pathSVG} alt={pathSVG} />}
        {isPassword &&
          (visible === "password" ? (
            <img
              src={auxIcon}
              alt={auxIcon}
              onClick={() => {
                setVisible("text");
              }}
            />
          ) : (
            <img
              src={auxIcon2}
              alt={auxIcon2}
              onClick={() => {
                setVisible("password");
              }}
            />
          ))}
      </div>
      {errorMessage && (
        <p className="text-red-400 text-xs px-4">{errorMessage as string}</p>
      )}
    </div>
  );
};

export default CustomInputWithIcon;

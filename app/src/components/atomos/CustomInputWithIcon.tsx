import React, { useState } from "react";

type PropsCustomInput = {
  pathSVG?: string;
  errorMessage?: string;
  isPassword: boolean;
} & React.ComponentProps<"input">;
const CustomInput = ({
  pathSVG,
  errorMessage,
  isPassword,
  ...rest
}: PropsCustomInput) => {
  const [visible, setVisible] = useState<"text" | "password">("password");
  const auxIcon = "assets/icon/eye-closed-outline.svg";
  const auxIcon2 = "assets/icon/eye-outline.svg";
  const flagIcon = !(rest.type === "password") && pathSVG !== undefined;
  return (
    <div>
      <div className=" flex w-full flex-col rounded-xl border border-customText">
        <div className="flex p-2 w-full text-customText">
          <input
            {...rest}
            type={visible}
            className="w-full text-customText font-light border-none bg-transparent px-1 placeholder:text-customText placeholder:font-light outline-none"
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
      </div>
      {errorMessage && (
        <p className="text-red-400 text-xs px-4">{errorMessage as string}</p>
      )}
    </div>
  );
};

export default CustomInput;
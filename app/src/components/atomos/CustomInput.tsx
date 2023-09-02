import React from "react";

type PropsCustomInput = {
  placeholder?: string;
  pathSVG?: string;
  onClickIcon?: () => void;
  errorMessage?: string;
  typeInput: React.HTMLInputTypeAttribute | undefined;
};
const CustomInput = ({
  placeholder,
  pathSVG,
  onClickIcon,
  errorMessage,
  typeInput,
}: PropsCustomInput) => {
  const auxIcon = "assets/icon/eye-outline.svg";
  const flagIcon = !(typeInput === "password") && pathSVG !== undefined;
  const onClick = () => {};
  return (
    <div>
      <div className=" flex w-full flex-col rounded-xl border border-customText">
        <div className="flex p-2 w-full text-customText">
          <input
            type={typeInput}
            placeholder={placeholder}
            className="w-full text-customText font-light border-none bg-transparent px-1 placeholder:text-customText placeholder:font-light outline-none"
          />
          {flagIcon && <img src={pathSVG} alt={pathSVG} />}
          {typeInput === "password" && (
            <img src={auxIcon} alt={auxIcon} onClick={onClickIcon ?? onClick} />
          )}
        </div>
      </div>
      {errorMessage && (
        <p className="text-red-400 text-xs px-4">{errorMessage as string}</p>
      )}
    </div>
  );
};

export default CustomInput;
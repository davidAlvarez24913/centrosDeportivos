import React from "react";

type PropsCustomInput = {
  errorMessage?: string;
  label?: string;
} & React.ComponentProps<"input">;
const CustomInput = ({ errorMessage, label, ...rest }: PropsCustomInput) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          className={`text-base font-light px-1`}
          htmlFor={label?.replaceAll(" ", "_")}
        >
          {label}
        </label>
      )}
      <div className=" flex w-full flex-col rounded-xl border border-customText">
        <div className="flex p-2 w-full text-customText">
          <input
            {...rest}
            type={rest.type}
            className="w-full text-customText font-light border-none bg-transparent px-1 placeholder:text-customText placeholder:font-light outline-none"
          />
        </div>
      </div>
      {errorMessage && (
        <p className="text-red-400 text-xs px-2">{errorMessage as string}</p>
      )}
    </div>
  );
};

export default CustomInput;

import React from "react";

type PropsCustomInput = {
  errorMessage?: string;
} & React.ComponentProps<"input">;
const CustomInput = ({ errorMessage, ...rest }: PropsCustomInput) => {
  return (
    <div>
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
        <p className="text-red-400 text-xs px-4">{errorMessage as string}</p>
      )}
    </div>
  );
};

export default CustomInput;

type PropsCustomInput = {
  label?: string;
  color: "white" | "blue";
  errorMessage?: string;
  pathSVG?: string;
} & React.ComponentProps<"input">;

const CustomInput = ({
  label,
  color,
  pathSVG,
  errorMessage,
  ...rest
}: PropsCustomInput) => {
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
          {...rest}
          id={label?.replaceAll(" ", "_")}
          placeholder={rest.placeholder}
        />
      </div>
      {errorMessage && (
        <p className="text-red-400 text-xs px-4">{errorMessage as string}</p>
      )}
    </div>
  );
};

export default CustomInput;

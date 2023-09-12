type PropsCustomTextarea = {
  label?: string;
  color: "white" | "blue";
} & React.ComponentProps<"textarea">;

const CustomTextarea = ({ label, color, ...rest }: PropsCustomTextarea) => {
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
        className={`${styleBlue}  ${styleWhite} flex w-full rounded-xl border-2 py-1 h-32`}
      >
        <textarea
          className={`bg-transparent outline-none w-full h-full  px-3 ${styleBlue}  ${styleWhite} ${placeholderBlue}  ${placeholderWhite}  `}
          {...rest}
          id={label?.replaceAll(" ", "_")}
          name={label?.replaceAll(" ", "_")}
          placeholder={rest.placeholder}
          maxLength={500}
        />
      </div>
    </div>
  );
};

export default CustomTextarea;

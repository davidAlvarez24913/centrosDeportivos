import { Sport } from "schema";

type PropsCustomSelect = {
  label?: string;
  color: "white" | "blue";
  sports: Sport[];
} & React.ComponentProps<"select">;

const CustomSelect = ({ label, color, sports, ...rest }: PropsCustomSelect) => {
  const styleBlue = color === "blue" && " border-background";
  const styleWhite = color === "white" && " border-customText";
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
        className={`${styleBlue}  ${styleWhite} flex w-full rounded-xl border-2 py-1 `}
      >
        <select
          className="w-full  bg-transparent border-0 appearance-none  focus:outline-none focus:ring-0  px-3 peer "
          {...rest}
          id={label?.replaceAll(" ", "_")}
        >
          <option selected disabled>
            Seleccione un deporte
          </option>
          {sports.map((sport, index) => {
            return (
              <option value={sport} key={index}>
                {sport}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;

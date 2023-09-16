import { memo } from "react";

type PropsCustomLink = {
  label: string;
  srcImage: string;
  width: string | number;
  height: string | number;
  isActive: boolean;
} & React.ComponentProps<"a">;
const CustomLink = ({
  label,
  srcImage,
  width,
  height,
  isActive,
  ...rest
}: PropsCustomLink) => {
  const styleByRoute = isActive
    ? "text-background bg-primary"
    : "text-customText";
  return (
    <a
      className={
        "flex rounded-xl gap-5 items-center px-3 py-2  no-underline left-0" +
        styleByRoute
      }
      {...rest}
    >
      <img
        src={srcImage}
        alt={label}
        width={width}
        height={height}
        className={styleByRoute}
      />
      <p
        className={`${
          isActive ? "text-background" : "text-customText"
        } font-normal text-2xl`}
      >
        {label}
      </p>
    </a>
  );
};

export default memo(CustomLink);

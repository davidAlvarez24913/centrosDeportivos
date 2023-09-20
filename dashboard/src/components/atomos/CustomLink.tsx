import { memo } from "react";
import { Link } from "react-router-dom";

type PropsCustomLink = {
  label: string;
  srcImage: string;
  isActive: boolean;
  to: string;
};
const CustomLink = ({ label, srcImage, isActive, to }: PropsCustomLink) => {
  const styleByRoute = isActive
    ? " text-background bg-primary"
    : " text-customText";
  return (
    <Link
      className={
        "flex rounded-xl gap-5 items-center px-3 py-2  no-underline left-0" +
        styleByRoute
      }
      to={to}
    >
      <img
        src={srcImage}
        alt={label}
        className={"w-5 md:w-10" + styleByRoute}
      />
      <p
        className={`${
          isActive ? "text-background" : "text-customText"
        } font-normal md:text-2xl`}
      >
        {label}
      </p>
    </Link>
  );
};

export default memo(CustomLink);

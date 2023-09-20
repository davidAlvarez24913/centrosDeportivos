import { useLocation } from "react-router-dom";
import { CustomLink } from "../../atomos";

type LinkNavProps = {
  label: string;
  href: string;
  iconPath: string;
};
const LinkNav = ({ label, href, iconPath }: LinkNavProps) => {
  const location = useLocation();
  const currentPath = location.pathname === href;

  return (
    <CustomLink
      to={href}
      srcImage={`${iconPath}${currentPath ? "-blue.svg" : ".svg"}`}
      label={label}
      key={label}
      isActive={currentPath}
    ></CustomLink>
  );
};

export default LinkNav;

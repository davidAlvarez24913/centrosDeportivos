import { useLocation } from "react-router-dom";
import { CustomLink } from "../../atomos";

type PropsNavbar = {
  nameSportCenter: string;
};
const Navbar = ({ nameSportCenter }: PropsNavbar) => {
  const location = useLocation();
  const navLinks = [
    { href: "/reservaciones", label: "Reservaciones", icon: "/icons/book" },
    { href: "/servicios", label: "Servicios", icon: "/icons/service_icon" },
    { href: "/perfil", label: "Perfil", icon: "/icons/profile" },
  ];
  return (
    <div className="bg-background flex flex-col right-0 h-screen w-72">
      <div className="mx-auto">
        <a
          href="/reservaciones"
          className="flex no-underline items-end px-3 py-3"
        >
          <img
            src="/icons/logo.svg"
            alt="logo"
            width={52}
            height={56}
            className="text-customText pt-10 pb-1"
          />
          <p className=" text-customText -left-1 font-semibold text-2xl">
            asTas
          </p>
        </a>
      </div>
      <h2 className="text-customText font-semibold text-3xl mx-auto">
        {nameSportCenter}
      </h2>
      <nav className="flex flex-col px-3 gap-4 pt-8">
        {navLinks.map((link, index) => {
          const currentPath = location.pathname === link.href;
          return (
            <CustomLink
              href={link.href}
              srcImage={`${link.icon}${currentPath ? "-blue.svg" : ".svg"}`}
              width={40}
              height={40}
              label={link.label}
              isActive={currentPath}
              key={index}
            />
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;

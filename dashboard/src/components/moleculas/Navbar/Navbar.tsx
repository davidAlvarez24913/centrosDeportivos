import { useLocation, useNavigate } from "react-router-dom";
import { CustomButton, CustomLink, LinkLogo } from "../../atomos";
import { useEffect, useState } from "react";
import { auth } from "../../Firebase";
import { signOut } from "@firebase/auth";

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
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.screen.width > 768 && setIsOpen(true);
    window.innerWidth > 768 && setIsOpen(true);
  }, []);
  return (
    <div>
      <div
        className="md:hidden bg-background py-10 px-10 flex items-center"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <img
          src={`/icons/${isOpen ? "arrowleft" : "menu-fill"}.svg`}
          alt="menu icon"
          width={40}
          height={40}
        />
        {!isOpen && <LinkLogo />}
      </div>
      <div
        className={`bg-background flex flex-col right-0 h-screen md:w-72 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <LinkLogo />
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
        <CustomButton
          color="cancel"
          title="salir"
          type="button"
          onClick={() => {
            signOut(auth);
            navigate("/login");
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;

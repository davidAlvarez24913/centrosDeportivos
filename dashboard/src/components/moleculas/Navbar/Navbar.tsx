import { LinkLogo, LogoutButton, MenuBar } from "../../atomos";
import { memo, useEffect, useState } from "react";
import LinkNav from "../LinkNav";

type PropsNavbar = {
  nameSportCenter: string;
};
const Navbar = ({ nameSportCenter }: PropsNavbar) => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  const handleResize = () => {
    setWidth(window.innerWidth);
    if (width > 1249) setIsOpen(false);
  };
  return (
    <div>
      <div
        className={`md:hidden bg-${
          !isOpen ? "background" : "white"
        } py-10 px-10 flex items-center`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {!isOpen ? (
          <img
            src="/icons/arrowleft.svg"
            alt="menu icon"
            width={40}
            height={40}
          />
        ) : (
          <img
            src="/icons/menu-fill.svg"
            alt="menu icon"
            width={40}
            height={40}
          />
        )}
      </div>
      <div className={`${isOpen ? "hidden" : ""}`}>
        <MenuBar>
          <div>
            <div className="flex flex-col">
              <LinkLogo />
              <h2 className="text-customText font-semibold text-3xl mx-auto">
                {nameSportCenter}
              </h2>
            </div>
            <div className="flex flex-col">
              <nav className="flex flex-col px-3 gap-4 pt-8">
                <LinkNav
                  href="/reservaciones"
                  iconPath="/icons/book"
                  label="Reservaciones"
                />
                <LinkNav
                  href="/servicios"
                  iconPath="/icons/service_icon"
                  label="Servicios"
                />
                <LinkNav
                  href="/perfil"
                  iconPath="/icons/profile"
                  label="Perfil"
                />
              </nav>
            </div>
          </div>
          <div className="bottom-0">
            <LogoutButton />
          </div>
        </MenuBar>
      </div>
    </div>
  );
};

export default memo(Navbar);

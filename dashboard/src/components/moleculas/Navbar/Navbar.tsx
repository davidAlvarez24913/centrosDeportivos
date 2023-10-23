import { LinkLogo, LogoutButton, MenuBar } from "../../atomos";
import { memo, useEffect, useState } from "react";
import LinkNav from "../LinkNav";
import { useGetPermissionSportCenterQuery } from "schema";
import useUser from "../../../Hooks/useUser";

type PropsNavbar = {
  nameSportCenter: string;
};
const Navbar = ({ nameSportCenter }: PropsNavbar) => {
  const { user, loadingUser } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const { data, loading } = useGetPermissionSportCenterQuery({
    variables: { sportCenterId: user?.uid as string },
  });
  const flag =
    !loadingUser &&
    !loading &&
    data?.getSportCenter?.superUser !== null &&
    data?.getSportCenter?.superUser;

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
              <h2 className="text-customText font-semibold text-bold md:text-2xl mx-auto">
                {nameSportCenter}
              </h2>
            </div>
            <div className="flex flex-col">
              <nav className="flex flex-col px-3 gap-4 pt-8">
                <LinkNav
                  href="/"
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
                {flag && (
                  <LinkNav
                    href="/access"
                    iconPath="/icons/profile"
                    label="Autorizar"
                  />
                )}
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

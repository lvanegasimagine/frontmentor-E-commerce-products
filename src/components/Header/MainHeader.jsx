import React, { useState } from "react";
import LogoSneakers from "@/assets/logo.svg";
import AvatarImage from "@/assets/image-avatar.png";
import MenuIcon from "../icons/MenuIcon";
import CartIcon from "../icons/CartIcon";
import CloseIcon from "../icons/CloseIcon";
import NavLinkHeader from "@/components/Header/NavLinkHeader";

const MainHeader = () => {
  const [navClass, setNavClass] = useState(
    "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
  );

  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-5 p-8 font-bold bg-slate-100 md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
    );
  };

  const handleCloseMenu = () => {
    setNavClass(
      "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
    );
  };
  return (
    <>
      <header className="container mx-auto flex items-center gap-8 p-4 md:p-0">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={LogoSneakers}
          alt="Logo Sneakers"
          className="mr-auto h-5 md:mr-0 mb-1"
        />
        <nav className={navClass}>
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Collections" />
          <NavLinkHeader text="Men" />
          <NavLinkHeader text="Women" />
          <NavLinkHeader text="About" />
          <NavLinkHeader text="Contact" />
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={AvatarImage} alt="Avatar LogoSneakers" className="w-10" />
        </div>
      </header>
      <span className="container hidden mx-auto w-full bg-gray-500 h-[1px] md:block"></span>
    </>
  );
};

export default MainHeader;

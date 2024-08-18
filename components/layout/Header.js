import { useState } from "react";

import Account from "../../public/icons/account";
import ShoppingCartIcon from "../../public/icons/shopping-icon";
import Input from "../UI/input";
import Hug from "../../public/icons/hug";
import MobileMenu from "../mobile-menu/MobileMenu";
import Navigation from "./Navigation";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const openMobileMenuHandler = () => {
    setToggleMenu(true);
  };

  const closeMobileMenuHandler = () => {
    setToggleMenu(false);
  };

  return (
    <div className="flex container justify-between items-center py-4 h-20 md:h-24 bg-white">
      <div className="hidden lg:flex gap-x-6">
        <Account />
        <ShoppingCartIcon />
        <div>
          <Input />
        </div>
      </div>
      <div className="lg:hidden">
        <Hug onClick={openMobileMenuHandler} />
      </div>
      <img src="./site-logo.svg" alt="site-logo" className="h-16 w-32" />

      {toggleMenu && <MobileMenu onClick={closeMobileMenuHandler} />}
    </div>
  );
}

export default Header;

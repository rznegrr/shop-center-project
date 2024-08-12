import Account from "../../public/icons/account";
import ShoppingCartIcon from "../../public/icons/shopping-icon";
import Input from "../UI/input";
import Hug from "../../public/icons/hug";
// import ShoppingCart from "../../public/icons/shop-icon/shopping-cart";

function Header() {
  const openMobileMenuHandler = () => {

  }

  return (
    <div className="flex container justify-between items-center py-4">
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
    </div>
  );
}

export default Header;

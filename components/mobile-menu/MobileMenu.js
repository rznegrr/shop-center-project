import React from "react";
import Exit from "../../public/icons/exit";
import Navigation from "../layout/Navigation";
import Link from "next/link";

function MobileMenu(props) {
  return (
    <div className="bg-white h-screen flex fixed top-0 right-0 z-50 overflow-y-scroll lg:hidden">
      <div className="w-[320px] bg-default h-screen">
        <div className="flex justify-between border-b border-gray-100 p-4">
          <img src="/site-logo.svg" alt="site-logo" className="h-12 w-32" />
          <Exit onClick={props.onClick} />
        </div>
        <div>
          <Navigation />
          <div className="mx-5 py-5 border-t border-gray-100 hover:text-info">
            <Link href={"/shopcart"}>سبد خرید</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;

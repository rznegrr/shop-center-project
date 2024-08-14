import React from "react";
import Exit from "../../public/icons/exit";
import Navigation from "../layout/Navigation";

function MobileMenu(props) {
  return (
    <div className="bg-white h-screen flex fixed right-0 top-0 z-50 lg:hidden">
      <div className="w-[320px] bg-default shadow-2xl h-screen">
        <div className="flex justify-between border-b border-gray-100 p-4">
          <img src='./site-logo.svg' alt="site-logo" className="h-12 w-32" />
          <Exit onClick={props.onClick}/>
        </div>
        <div>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;

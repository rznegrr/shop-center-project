import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import DropDown from "./DropDown";

function Navigation() {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const currentRoute = usePathname();

  const toggleDropDownHandler = () => {
    setToggleDropDown(!toggleDropDown);
  };

  return (
    <div className="lg:flex lg:bg-gray100">
      <ul className="list container flex flex-col lg:flex-row lg:gap-x-8 justify-center lg:items-center lg:py-4">
        <li>
          <Link className={`${currentRoute === "/" ? "active" : ""}`} href={"/"}>
            همه
          </Link>
        </li>
        <li
          className="dropdown"
        >
          <div onClick={toggleDropDownHandler} className={`flex items-center cursor-pointer gap-x-1 ${currentRoute === "/product" ? "active" : ""}`}>
            محصولات
            <MdOutlineKeyboardArrowDown />
          </div>
          {toggleDropDown && <DropDown />}
        </li>
        <li>
          <Link href={""}>وبلاگ</Link>
        </li>
        <li>
          <Link href={""}>درباره ما</Link>
        </li>
        <li>
          <Link href={""}>تماس با ما</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

import Link from "next/link";
import React from "react";

function DropDown() {
  return (
    <div className="py-2 dropdown-content overflow-y-scroll">
      <div className="xl:mr-5">
        <Link href={"/refrigerator"} className="dropdown-content-angle">
          یخچال
        </Link>
        <ul>
          <li>اسنوا</li>
          <li>سامسونگ</li>
          <li>بوش</li>
          <li>ال جی</li>
          <li>یخچال های دو در</li>
          <li>یخچال های چهار در</li>
        </ul>
      </div>
      <ul className="xl:mr-10">
        <Link href={"/tv"} className="dropdown-content-angle">
          تلویزیون
        </Link>
        <div>
          <li>سونی</li>
          <li>سامسونگ</li>
          <li>ایکس ویژن</li>
          <li>ال جی</li>
        </div>
      </ul>
      <ul className="xl:mr-10 last-list">
        <Link href={""}>
          <button className="dropdown-content-angle">لوازم برقی و خانگی</button>
        </Link>
        <li>اتو</li>
        <li>ماشین لباسشویی</li>
        <li>ماشین ظرفشویی</li>
        <li>قهوه و چای ساز، آب میوه گیر</li>
        <li>اجاق گاز</li>
        <li>مایکروویو، ماکروفر</li>
        <li>جاروبرقی</li>
      </ul>
    </div>
  );
}

export default DropDown;

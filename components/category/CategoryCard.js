import React from "react";

function CategoryCard(props) {
  return (
    <div className={`col-span-1 w-24 h-24 lg:w-36 lg:h-36 rounded-3xl flex flex-col justify-center items-center ${props.color}`}>
      <img src={props.img} className="w-10 h-10 lg:w-14 lg:h-14"/>
      <p className="text-[10px] lg:text-sm text-black pt-3 lg:pt-4">{props.text}</p>
    </div>
  );
}

export default CategoryCard;

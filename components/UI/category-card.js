import React from "react";

function CategoryCard(props) {
  return (
    <div className="col-span-1">
      <img className="w-44 h-44 " src={props.img} />
      <p className="text-sm text-black">{props.text}</p>
    </div>
  );
}

export default CategoryCard;

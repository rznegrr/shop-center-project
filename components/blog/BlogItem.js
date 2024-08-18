import React from "react";
import Button from "../UI/button";

function BlogItem(props) {
  const { title, image, date } = props.items;
  return (
    <>
      <div>
        <img src={image} className="h-52 w-60 md:w-72 md:h-60 rounded-2xl" alt="blogs" />
      </div>
      <div className="absolute top-36 md:top-40 right-6 bg-white shadow-md w-48 md:w-60 md:h-36 p-3 md:p-5 rounded-xl overflow-hidden">
        <div className="flex flex-col">
          <p className="text-2xs md:text-xs text-gray200 pb-2">{date}</p>
          <p className="text-xs md:text-[13px] truncate">{title}</p>
          <p className="text-2xs md:text-xs text-gray200 pt-2 pb-4">
            توسط <span className="text-info800">نویسنده</span>
          </p>
          <Button name="بیشتر بخوانیم"/>
        </div>
      </div>
    </>
  );
}

export default BlogItem;

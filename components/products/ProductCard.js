import React from "react";
import { FaStar } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import Button from "../UI/button";

function ProductCard(props) {
  const { brand, image, name, price, offPrice, mark } = props.items;

  return (
    <>
      {/* <span className='label'>{mark}</span> */}
      <img
        src={image}
        alt="product picture"
        className="rounded-3xl h-28 w-28 lg:h-48 lg:w-52 md:p-2 lg:p-6 m-auto"
      />
      <div className="p-3 lg:p-4">
        <p className="text-2xs md:text-xs text-gray200">{brand}</p>
        <p className="text-xs md:text-[13px] py-2">{name}</p>

        <div className="flex gap-x-1 items-center">
          <FaStar className="h-2 w-2 md:h-3 md:w-3 text-yellow-400" />
          <FaStar className="h-2 w-2 md:h-3 md:w-3 text-yellow-400" />
          <FaStar className="h-2 w-2 md:h-3 md:w-3 text-yellow-400" />
          <FaStar className="h-2 w-2 md:h-3 md:w-3 text-yellow-400" />
          <FaStar className="h-2 w-2 md:h-3 md:w-3 text-yellow-400" />
          <p className="text-2xs md:text-xs text-gray200">(3.5k)</p>
        </div>

        <p className="text-2xs md:text-xs text-gray200 pt-2">
          توسط <span className="text-info800">فروشنده</span>
        </p>

        <div className="flex gap-x-1 items-end justify-between pt-5 lg:pt-8">
          <Button name="خرید" icon={<SlBasket className="text-sm" />} />
          <div className="flex flex-col">
            <p className="text-2xs md:text-xs text-left text-gray-400">
              <del>{offPrice}</del>
            </p>
            <p className="text-2xs md:text-xs">
              {price}
              <span className="text-2xs md:text-xs text-gray-700 pr-1">
                تومان
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

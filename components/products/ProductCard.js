import React from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import Button from "../UI/button";
import { formatPrice } from "../../utils/priceUtiles";

function ProductCard(props) {
  const { brand, image, name, price, offPrice, mark, id } = props.items;

  return (
    <div>
      {mark && <span className='label'>{mark}</span>}
        <img
          src={image}
          alt="product picture"
          className="rounded-3xl p-2 w-20 h-20 xs:w-28 xs:h-28 lg:h-48 lg:w-52 md:p-2 lg:p-6 m-auto"
        />
      <div className="p-3 lg:p-4">
        <p className="text-2xs md:text-xs text-gray200">{brand}</p>
        <Link href={`/product/${id}`}>
          <p className="text-xs md:text-[13px] py-2">{name}</p>
        </Link>

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

        <div className="flex gap-x-1 items-end justify-between pt-5 lg:pt-8 bottom-4 absolute lg:bottom-5">
          <Link href={`/product/${id}`} className="ml-1">
            <Button
              name="خرید"
              icon={<SlBasket className="text-sm" />}
              className={
                "hover:bg-info200 hover:text-white transition ease-in-out duration-300"
              }
            />
          </Link>
          <div className="flex flex-col">
           {offPrice && <p className="text-2xs md:text-xs text-left text-gray-400">
              <del>{formatPrice(offPrice)}</del>
            </p>}
            <p className="text-2xs md:text-xs">
              {formatPrice(price)}
              <span className="text-2xs md:text-xs text-gray-700 pr-1">
                تومان
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

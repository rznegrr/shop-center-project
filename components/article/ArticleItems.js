import React from "react";
import { FaStar } from "react-icons/fa6";
import { formatPrice } from "../../utils/priceUtiles";

function ArticleItems(props) {
  const { image, name, price, offPrice } = props.items;

  return (
    <div className="flex overflow-hidden">
      <div className="w-24 bg-white">
        <img src={image} className="rounded-lg p-2" />
      </div>

      <div className="p-2">
        <p className="text-xs pb-2 truncate">{name}</p>

        <div className="flex flex-col">
          <div className="flex items-center gap-x-1 mb-2">
            <FaStar className="h-2 w-2 md:h-3 md:w-3 text-yellow-400" />
            <FaStar className="h-2 w-2 md:h-3 md:w-3 text-yellow-400" />
            <FaStar className="h-2 w-2 md:h-3 md:w-3 text-yellow-400" />
            <FaStar className="h-2 w-2 md:h-3 md:w-3 text-yellow-400" />
            <p className="text-2xs md:text-xs text-gray200 mr-1">(3.5k)</p>
          </div>

          <div className="flex flex-col mr-[120px] xl:mr-[84px]">
            {offPrice && <p className="text-2xs md:text-xs text-gray-400">
              <del>{formatPrice(offPrice)}</del>
            </p>}
            <p className="text-2xs md:text-xs text-info">
              {formatPrice(price)}
              <span className="text-2xs text-gray-700 pr-1">تومان</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleItems;

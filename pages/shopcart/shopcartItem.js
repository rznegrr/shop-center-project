import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../store/cartSlice";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { formatPrice } from "../../utils/priceUtiles";

function ShopcartItem(props) {
  const { id, image, name, quantity, price } = props.items;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(addItem({ id, name, price, quantity: 1 }));
  };

  const removeItemHandler = () => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <div
        key={id}
        className="h-28 md:h-36 border border-gray-200 rounded-lg flex gap-x-5 items-center p-2 md:p-4 mt-7"
      >
        <img src={image} className="h-16 w-16 md:h-32 md:w-32 rounded-xl" />
        <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-x-10 w-full justify-between gap-y-4">
          <p className="text-sm md:text-base font-semibold">{name}</p>
          <div className="flex gap-x-2 xs:gap-x-10 md:ml-4 items-center">
            <div className="flex items-center gap-x-4 border px-2">
              <FaMinus
                className="text-xs text-gray-700"
                onClick={removeItemHandler}
              />
              <p className="text-gray-700 border-y">{quantity}</p>
              <FaPlus
                className="text-xs text-gray-700"
                onClick={addItemHandler}
              />
            </div>
            <p className="text-xs xs:text-sm md:text-base text-info">
              {formatPrice(price)}
              <span className="text-xs md:text-sm text-gray-700 pr-1">
                تومان
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopcartItem;

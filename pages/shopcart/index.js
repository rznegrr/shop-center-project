import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../../store/cartSlice";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

import Breadcrumbs from "../../components/BreadCrumbs";
import MainLayout from "../../components/layout/MainLayout";
import HeadTitle from "../../components/UI/headTitle";

function ShopCartPage() {
  const cartItems = useSelector((state) => state.shopCart.items);
  const totalAmount = useSelector((state) => state.shopCart.totalAmount);
  const dispatch = useDispatch();

  const removeItemHandler = (id) => {
    dispatch(removeItem(id));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <MainLayout>
        <HeadTitle title="شاپ سنتر | سبد خرید" />
        <Breadcrumbs
          name1="محصولات"
          part1={"product"}
          name2={"سبد خرید"}
          part2={"shopcart"}
        />
        {cartItems.length > 0 ? (
          <div className="container grid grid-cols-12 gap-x-5 pb-10">
            <div className="col-span-12 lg:col-span-7 overflow-hidden">
              {cartItems.map((items) => (
                <div
                  key={items.id}
                  className="h-28 md:h-36 border border-gray-200 rounded-lg flex gap-x-5 items-center p-2 md:p-4 mt-7"
                >
                  <img
                    src={items.image}
                    className="h-16 w-16 md:h-32 md:w-32 rounded-xl"
                  />
                  <div className="flex flex-col md:flex-row gap-x-10 w-full justify-between gap-y-4">
                    <p className="text-sm md:text-base font-semibold">
                      {items.name}
                    </p>
                    <div className="flex gap-x-2 xs:gap-x-10 md:ml-4 items-center">
                      <div className="flex items-center gap-x-4 border px-2">
                        <FaMinus className="text-xs text-gray-700" />
                        <p className="text-gray-700 border-y">
                          {items.quantity}
                        </p>
                        <FaPlus className="text-xs text-gray-700" />
                      </div>
                      <p className="text-xs xs:text-sm md:text-base text-info">
                        {items.price}
                        <span className="text-xs md:text-sm text-gray-700 pr-1">
                          تومان
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-12 lg:col-span-5 border border-gray-200 p-4 md:p-8 h-80 rounded-lg flex flex-col mt-7">
              <p className="text-info py-4 text-lg md:text-xl">
                جمع کل سبد خرید
              </p>
              <div className="flex justify-between border-b border-gray-100 py-5">
                <p>حمل و نقل</p>
                <p className="text-info">محاسبه حمل و نقل</p>
              </div>
              <div className="flex justify-between py-5">
                <p>مجموع</p>
                <p className="text-gray-700 text-lg">
                  {totalAmount}
                  <span className="text-sm mr-1">تومان</span>
                </p>
              </div>
              <button className="mt-5 mb-5 py-1 rounded-md text-white bg-info800 text-sm md:text-base w-60 md:w-80 lg:w-60 m-auto">
                ادامه جهت تسویه حساب
              </button>
            </div>
          </div>
        ) : (
          <div className="container h-32 w-full">
            <p className="text-center text-info mt-10">سبد خرید خالی است 😞</p>
          </div>
        )}
      </MainLayout>
    </>
  );
}

export default ShopCartPage;

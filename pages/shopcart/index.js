import React from "react";
import { useSelector } from "react-redux";

import Breadcrumbs from "../../components/BreadCrumbs";
import MainLayout from "../../components/layout/MainLayout";
import HeadTitle from "../../components/UI/headTitle";
import ShopcartItem from "../../components/shopcartItem";
import { formatPrice } from "../../utils/priceUtiles";

function ShopCartPage() {
  const cartItems = useSelector((state) => state.shopCart.items);
  const totalAmount = useSelector((state) => state.shopCart.totalAmount);

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
                <div key={items.id}>
                  <ShopcartItem items={items} />
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
                  {formatPrice(totalAmount)}
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

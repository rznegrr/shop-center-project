import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/cartSlice";

import { FaStar, FaMinus, FaPlus } from "react-icons/fa6";
import { Toaster } from "react-hot-toast";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { formatPrice } from "../../utils/priceUtiles";
import Breadcrumbs from "../BreadCrumbs";
import SpecificationProduct from "../UI/SpecificationProduct";
import CommentForm from "../UI/comment-form";
import Link from "next/link";

function ProductDetail({ product }) {
  const dispatch = useDispatch();
  const productQuantity = useSelector((state) => state.shopCart.quantity);
  const [activeComponent, setActiveComponent] = useState("first");
  const [showQuantity, setShowQuantity] = useState(true);
  const [mainImage, setMainImage] = useState(product.image);

  const handleFirstButtonClick = () => {
    setActiveComponent("first");
  };

  const handleSecondButtonClick = () => {
    setActiveComponent("second");
  };

  const addToCartHandler = () => {
    dispatch(addItem(product));
    setShowQuantity(false);
  };

  const removeFromCartHandler = () => {
    dispatch(removeItem(product.id));
    if (productQuantity === 1) {
      setShowQuantity(true);
    }
  };

  return (
    <div>
      <div>
        <Toaster position="top-center" />
      </div>
      <div className="bg-gray-50 py-5 md:py-10 overflow-hidden">
        <Breadcrumbs
          name1={"محصولات"}
          part1={"product"}
          part2={product.id}
          name2={product.name}
        />
        <div className="productList">
          <div className="grid grid-cols-12 w-[90vw] bg-white m-auto">
            <div className="col-span-12 xl:col-span-4 flex flex-col xl:flex-row-reverse xl:mr-3 place-items-center relative">
              <img
                src={mainImage}
                className="w-40 xs:w-64 md:w-80 lg:h-[340px] xl:w-80 m-auto p-3 object-cover"
                alt="product"
              />
              <ul className="flex xl:flex-col items-start gap-x-2 mt-3 overflow-hidden m-auto md:mx-0 md:gap-y-3">
                <li onClick={() => setMainImage(product.image)}>
                  <img
                    className="w-[50px] md:w-[65px] border border-gray-400 rounded-xl p-1 cursor-pointer"
                    src={product.image}
                    alt="product-gallery"
                  />
                </li>
                {product.gallery.map((pic, index) => (
                  <li key={index} onClick={() => setMainImage(pic)}>
                    <img
                      className="w-[50px] md:w-[65px] border border-gray-400 rounded-xl p-1 cursor-pointer"
                      src={pic}
                      alt="product-gallery"
                    />
                  </li>
                ))}
                {product.mark && (
                  <div className="absolute text-2xs top-4 left-6 md:top-10 md:left-16 xl:left-8 xl:top-4 z-10 md:text-xs bg-info200 text-white px-2 py-1 rounded-full">
                    {product.mark}
                  </div>
                )}
              </ul>
            </div>

            <div className="col-span-12 md:col-span-6 xl:col-span-4 mt-5 xl:mt-7 px-4">
              <p className="text-xl font-bold text-gray-900">{product.name}</p>

              <div className="flex items-center mt-2 gap-x-1">
                <FaStar className="h-2 w-2 md:h-3 md:w-3 text-yellow-400" />
                <FaStar className="h-2 w-2 md:h-3 md:w-3 text-yellow-400" />
                <FaStar className="h-2 w-2 md:h-3 md:w-3 text-yellow-400" />
                <FaStar className="h-2 w-2 md:h-3 md:w-3 text-yellow-400" />
                <p className="text-xs mt-1">4.4</p>
              </div>

              <div className="my-4 flex gap-x-3 items-center">
                <p className="text-gray-700 text-[15px]">
                  برند :
                  <span className="text-info800 text-sm">{product.brand}</span>
                </p>
              </div>
              <p className="flex items-center gap-x-2 text-gray-700 text-[15px]">
                رنگ کالا :
                <span className="border px-4 py-[2px] rounded-xl text-xs md:text-sm">
                  {product.color}
                </span>
              </p>

              <div className="text-sm mt-4 flex flex-col gap-y-1">
                <div className="flex gap-x-2 items-center">
                  <input type="radio" id="Warranty" name="choosen" />
                  <label htmlFor="Warranty">گارانتی 12 ماهه</label>
                </div>
                <div className="flex gap-x-2 items-center">
                  <input type="radio" id="Delivery" name="choosen" />
                  <label htmlFor="Delivery">تحویل طی 24 ساعت</label>
                </div>
              </div>

              <div className="text-gray-800 mt-5">
                {product.offPrice && (
                  <p className="text-left ml-24">
                    <del>{formatPrice(product.offPrice)}</del>
                  </p>
                )}
                <p className="text-xl mt-1 text-left text-[#35394d]">
                  <span className="text-2xl text-info800 font-bold ml-2">
                    {formatPrice(product.price)}
                  </span>
                  تومان
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 xl:col-span-4 pt-0 md:pt-4 p-4">
              <p className="text-lg font-bold text-gray-900 my-3">
                ویژگی های محصول
              </p>
              {product.features.map((items, index) => (
                <li
                  className="list-disc pb-2 text-sm text-gray-800"
                  key={index}
                >
                  {items}
                </li>
              ))}
              <p className="text-sm mt-4 mb-2">
                فروشنده :
                <span className="text-sm text-[#616DA7]">شاپ سنتر</span>
              </p>
              <div className="flex items-center border w-[13rem] md:w-[18.3rem] py-1 px-2 rounded-md">
                <RiArrowDropLeftLine className="text-gray-500" />
                <p className="text-xs md:text-sm">جستجو در فروشندگان دیگر</p>
              </div>

              {showQuantity ? (
                <button
                  className="bg-info800 text-white text-sm w-52 md:w-[18.3rem] py-1 rounded-md mt-2 hover:bg-info200 hover:text-info transition ease-in-out duration-300"
                  onClick={addToCartHandler}
                >
                  افزودن به سبد خرید
                </button>
              ) : (
                <div className="flex items-center mt-2">
                  <div className="flex items-center gap-x-4 border px-2 rounded-md w-20">
                    <FaMinus
                      className="text-xs text-gray-700 cursor-pointer"
                      onClick={removeFromCartHandler}
                    />
                    <p className="text-gray-700 border-y">{productQuantity}</p>
                    <FaPlus
                      className="text-xs text-gray-700 cursor-pointer"
                      onClick={addToCartHandler}
                    />
                  </div>
                  <Link href={"/shopcart"}>
                    <p className="text-xs md:text-sm mr-3 text-info">
                      مشاهده سبد خرید
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white w-[90vw] m-auto mt-10 xs:mt-32 sm:mt-0">
          <div className="flex gap-x-10 mt-1 border-y px-5 py-4">
            <button
              className="cursor-pointer text-gray-900"
              onClick={handleFirstButtonClick}
            >
              خصوصیات
            </button>
            <button
              className="cursor-pointer text-gray-900"
              onClick={handleSecondButtonClick}
            >
              نظرات کاربران
            </button>
          </div>
          {activeComponent === "first" && (
            <SpecificationProduct name={product.name} />
          )}
          {activeComponent === "second" && <CommentForm />}
        </div>
        {/* <div className="w-[95vw] mt-10 md:mt-20 m-auto">
          <p className="mb-10 text-center text-2xl font-bold">
            محصولات پیشنهادی
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default ProductDetail;

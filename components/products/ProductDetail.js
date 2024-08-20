import React from "react";
import { FaStar } from "react-icons/fa6";
import MainLayout from "../layout/MainLayout";
import ProductSlider from "./ProductSlider";
import Breadcrumbs from "../BreadCrumbs";

function ProductDetail({ product }) {
  return (
    <>
      <MainLayout>
        <div className="bg-gray100 py-5 md:py-10 overflow-hidden">
          <Breadcrumbs name={product.name} id={product.id} />
          <div className="productList">
            <div className="grid grid-cols-12 w-[90vw] bg-white m-auto">
              <div className="col-span-12 sm:col-span-6 xl:col-span-4 flex flex-col md:flex-row-reverse md:mr-3">
                <img
                  src={product.image}
                  className="w-40 xs:w-64 lg:w-80 xl:w-96 m-auto p-3"
                  alt="product"
                />
                <div className="flex md:flex-col items-start gap-x-2 mt-3 overflow-hidden mx-auto md:mx-0 md:gap-y-3">
                  {product.gallery.map((pics, index) => (
                    <li key={index}>
                      <img
                        className="w-[50px] md:w-[65px] border border-gray-400 rounded-xl p-1 cursor-pointer"
                        src={pics}
                        alt="product-gallery"
                      />
                    </li>
                  ))}
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-4 mt-5 px-3">
                <p className="text-xl font-bold text-gray-900">
                  {product.name}
                </p>
                <div className="flex items-center mt-2">
                  <FaStar className="h-2 w-2 md:h-3 md:w-3 text-yellow-400" />
                  <p className="text-xs mt-1">4.4</p>
                </div>
                <div className="my-4 flex gap-x-3 items-center">
                  <p className="text-gray-700 text-[15px]">
                    برند :
                    <span className="text-[#616DA7] text-[14px]">
                      {product.brand}
                    </span>
                  </p>
                </div>
                <p className="flex items-center gap-x-2 text-gray-700 text-[15px]">
                  رنگ کالا :{" "}
                  <span className="border px-4 py-[2px] rounded-xl">
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
                <div className="text-gray-800 mt-8">
                  <p className="text-left ml-24">
                    <del>{product.offPrice}</del>
                  </p>
                  <p className="text-xl mt-1 text-left text-[#35394d]">
                    <span className="text-2xl text-[#616DA7] font-bold ml-2">
                      {product.price}
                    </span>
                    تومان
                  </p>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-4 px-3 py-3">
                <p className="text-lg font-bold text-gray-900 my-3">
                  ویژگی های محصول
                </p>
                {product.features.map((items, index) => (
                  <li
                    className="list-disc pb-2 text-sm text-gray-900"
                    key={index}
                  >
                    {items}
                  </li>
                ))}
                <p className="text-sm mt-4 mb-2">
                  فروشنده :<span className="text-sm text-[#616DA7]">مسترا</span>
                </p>
                <p className="angle">جستجو در فروشندگان دیگر</p>
                <button
                  className="bg-[#616DA7] text-white text-sm md:text-base w-52 md:w-[18.3rem] py-1 rounded-md mt-1"
                  // onClick={() => addItem(productId)}
                >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white w-[90vw] m-auto mt-16 xs:mt-32 sm:mt-0">
            <ul className="flex gap-x-10 mt-1 border-y px-5 py-4">
              <li
                className="cursor-pointer text-gray-900"
                onClick={() => showTabHandler("firstbtn")}
              >
                خصوصیات{" "}
              </li>
              <li
                className="cursor-pointer text-gray-900"
                onClick={() => showTabHandler("secondbtn")}
              >
                نظرات کاربران
              </li>
            </ul>
            {/* {tab.firstbtn && <SpecificationProduct name={product.name} />}
            {tab.secondbtn && <AddComment name={"ثبت دیدگاه"} />} */}
          </div>
          <div className="w-[95vw] mt-10 md:mt-20 m-auto">
            <p className="mb-10 text-center text-2xl font-bold">
              محصولات پیشنهادی
            </p>
            <ProductSlider />
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default ProductDetail;

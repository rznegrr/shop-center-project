import React from "react";
import ProductCard from "./ProductCard";
import CategoryTitle from "../UI/category-title";
import Products from "../../data/products.json";

function ProductList() {
  return (
    <div>
      <CategoryTitle title="محبوب ترین محصولات" />
      <ul className="grid grid-cols-6 container place-items-center gap-x-2 gap-y-3 md:gap-x-14 md:gap-y-10 lg:gap-x-5 lg:gap-y-3">
        {Products.map((pItem) => (
          <li
            className="col-span-3 md:col-span-2 xl:col-span-1 border border-gray-200 rounded-xl overflow-hidden h-[290px] md:h-[300px] lg:h-[400px]"
            key={pItem.id}
          >
            <ProductCard items={pItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

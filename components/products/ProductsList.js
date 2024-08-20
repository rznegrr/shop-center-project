import React from "react";
import ProductCard from "./ProductCard";
import Products from "../../data/products.json";

function ProductList({ start, end }) {
  const productToShow = Products.slice(start, end);

  return (
    <div>
      <ul className="grid grid-cols-6 container place-items-center gap-x-2 gap-y-3 md:gap-x-14 md:gap-y-10 lg:gap-x-5 lg:gap-y-3 md:pb-10">
        {productToShow.map((pItem) => (
          <li
            className="col-span-3 md:col-span-2 xl:col-span-1 border border-gray-200 rounded-xl overflow-hidden h-[290px] md:h-[300px] lg:h-[390px] relative"
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

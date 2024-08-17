import React from "react";
import Products from "../../data/products.json"
import ArticleItems from "./ArticleItems";

function ArticleList() {
  const productToShow = Products.slice(0, 3);
  return (
    <div>
      <ul className="flex flex-col gap-y-5">
        {productToShow.map((pItem) => (
          <li className="rounded-lg border border-gray-100" key={pItem.id}>
            <ArticleItems items={pItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;

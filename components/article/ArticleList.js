import React from "react";
import Products from "../../data/products.json";
import ArticleItems from "./ArticleItems";
import Link from "next/link";

function ArticleList(props) {
  const startIndex = props.start;
  const endIndex = props.end;
  const productToShow = Products.slice(startIndex, endIndex);

  return (
    <div>
      <ul className="flex flex-col gap-y-5">
        {productToShow.map((pItem) => (
          <li
            className="rounded-lg border border-gray-100 cursor-pointer hover:shadow-lg transition delay-150 duration-150 ease-in-out"
            key={pItem.id}
          >
            <Link href={`/product/${pItem.id}`}>
              <ArticleItems items={pItem} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;

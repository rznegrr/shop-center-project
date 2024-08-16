import React from "react";
import blogs from "../../data/blogs.json";
import BlogItem from "./BlogItem";
import CategoryTitle from "../UI/category-title";

function Blogs() {
  const blogsToShow = blogs.slice(0, 4);
  return (
    <>
    <CategoryTitle title='مقالات جدید شاپ سنتر'/>
      <div className="container">
        <ul className="grid grid-cols-4 place-items-center gap-x-2 gap-y-24 mb-28">
          {blogsToShow.map((bItem) => (
            <li
              className="col-span-4 md:col-span-2 xl:col-span-1 relative"
              key={bItem.id}
            >
              <BlogItem items={bItem} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Blogs;

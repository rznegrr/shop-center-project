import React from "react";
import ArticleList from "./ArticleList";

function Article(props) {
  return (
    <div className="col-span-4 md:col-span-2 xl:col-span-1 pb-10">
      <div className="flex flex-col">
        <h2 className="text-sm lg:text-xl font-semibold text-gray-800">{props.title}</h2>
        <span className="w-16 border-b-2 border-info200 my-5"></span>
      </div>
      <ArticleList />
    </div>
  );
}

export default Article;

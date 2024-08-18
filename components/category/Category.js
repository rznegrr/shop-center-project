import React from "react";
import CategoryCard from "./CategoryCard";
import CategoryTitle from "../UI/category-title";

function Category() {
  return (
    <div className="md:pt-5">
      <CategoryTitle title="خرید بر اساس دسته بندی" />
      <div className="container grid grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-x-4 gap-y-4 place-items-center">
        <CategoryCard
          img="./icons/refrigerator.png"
          text="یخچال فریزر"
          color="bg-[#F0FEFF]"
        />
        <CategoryCard
          img="./icons/smart-tv.png"
          text="تلویزیون"
          color="bg-[#FFF3FF]"
        />
        <CategoryCard
          img="./icons/laundry.png"
          text="ماشین لباسشویی"
          color="bg-[#F2F2F2]"
        />
        <CategoryCard
          img="./icons/microwave.png"
          text="ماکروویو"
          color="bg-[#FFFCEB]"
        />
        <CategoryCard
          img="./icons/iron.png"
          text="اتو"
          color="bg-[#EEF8FF] sm:hidden"
        />
        <CategoryCard
          img="./icons/vacuum-cleaner.png"
          text="جارو برقی"
          color="bg-[#FFF1F0]"
        />
        <CategoryCard
          img="./icons/mixer.png"
          text="مخلوط کن"
          color="bg-[#F0F4FF]"
        />
        <CategoryCard
          img="./icons/gas-range.png"
          text="گاز و فر"
          color="bg-[#FFF0F9]"
        />
        <CategoryCard
          img="./icons/rice-cooker.png"
          text="بخارپز و پلوپز"
          color="bg-[#F2FCE4]"
        />
      </div>
    </div>
  );
}

export default Category;

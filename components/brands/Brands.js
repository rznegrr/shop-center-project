import CategoryTitle from "../UI/category-title";
import BrandSlide from "./BrandsSlide";

const Brands = () => {
  return (
    <div>
      <CategoryTitle title="محبوب ترین برند ها"/>
      <div className=" flex mb-10">
        <div className="container">
          <BrandSlide />
        </div>
      </div>
    </div>
  );
};

export default Brands;

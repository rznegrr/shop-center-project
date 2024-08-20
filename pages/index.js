import MainLayout from "../components/layout/MainLayout";
import HeadTitle from "../components/UI/headTitle";
import Hero from "../components/hero/Hero";
import Category from "../components/category/Category";
import Banner from "../components/banner/Banner";
import ProductList from "../components/products/ProductsList";
import Brands from "../components/brands/Brands";
import Feature from "../components/our-feature/Feature";
import Blogs from "../components/blog/Blogs";
import CategoryTitle from "../components/UI/category-title";
import ProductCard from "../components/products/ProductCard";
import Article from "../components/article/Article";
import ProductSlider from "../components/products/ProductSlider";

export default function MainPage() {
  return (
    <div>
      <HeadTitle title="صفحه اصلی" />
      <MainLayout>
        <Hero />
        <Category />
        <Banner />
        <CategoryTitle title="محبوب ترین محصولات" />
        <ProductList component={<ProductCard />} start={0} end={12}/>
        <Brands />
        <div className="container grid grid-cols-4 place-items-center gap-x-10 pt-5 md:pt-10">
          <Article title="محصولات جدید" start={10} end={13} />
          <Article title="پرفروش ترین محصولات" start={15} end={18} />
          <Article title="محصولات پربازدید" start={19} end={22} />
          <Article title="محبوب ترین محصولات" start={6} end={9} />
        </div>
        <Blogs />
        <div className="container md:pt-10 pb-5">
          <img
            src="./images/slider04.webp"
            className="m-auto h-[110px] md:h-[250px] lg:h-[350px] rounded-2xl"
          />
        </div>
        <CategoryTitle title="محصولات پیشنهادی" />
        <ProductSlider />
        <Feature />
      </MainLayout>
    </div>
  );
}

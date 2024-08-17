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

export default function MainPage() {
  return (
    <div>
      <HeadTitle title="صفحه اصلی" />
      <MainLayout>
        <Hero />
        <Category />
        <Banner />
        <CategoryTitle title="محبوب ترین محصولات" />
        <ProductList component={<ProductCard />} />
        <Brands />
        <Blogs />
        <div className="container grid grid-cols-4 place-items-center gap-x-10">
          <Article title="محبوب ترین محصولات" />
          <Article title="پرفروش ترین محصولات" />
          <Article title="محصولات جدید" />
          <Article title="محصولات پربازدید" />
        </div>
        <div className="container pt-10">
          <img
            src="./images/slider04.webp"
            className="m-auto h-[130px] md:h-[250px] lg:h-[350px] rounded-2xl"
          />
        </div>
        <Feature />
      </MainLayout>
    </div>
  );
}

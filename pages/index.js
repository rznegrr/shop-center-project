import MainLayout from "../components/layout/MainLayout";
import HeadTitle from "../components/UI/headTitle";
import Hero from "../components/hero/Hero";
import Category from "../components/category/Category";
import Banner from "../components/banner/Banner";
import ProductList from "../components/products/ProductsList";
import Brands from "../components/brands/Brands";
import Feature from "../components/our-feature/Feature";
import Blogs from "../components/blog/Blogs";

export default function MainPage() {
  return (
    <div>
      <HeadTitle title="صفحه اصلی" />
      <MainLayout>
        <Hero />
        <Category />
        <Banner />
        <ProductList />
        <Brands/>
        <Blogs/>
        <div className="container">
          <img src="./images/slider04.webp" className="m-auto h-[130px] md:h-[250px] lg:h-[350px] rounded-2xl"/>
        </div>
        <Feature/>
      </MainLayout>
    </div>
  );
}

import MainLayout from "../components/layout/MainLayout";
import HeadTitle from "../components/UI/headTitle";
import Hero from "../components/hero/Hero";
import Category from "../components/category/Category";

export default function MainPage() {
  return (
    <div>
      <HeadTitle title="صفحه اصلی" />
      <MainLayout />
      <Hero />
      <Category/>
    </div>
  );
}

import { useRouter } from "next/router";
import HeadTitle from "../components/UI/headTitle";
import Products from "../data/products.json";
import ProductCard from "../components/products/ProductCard";
import MainLayout from "../components/layout/MainLayout";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const filteredProducts = category
    ? Products.filter((item) => item.category === category)
    : Products;

  return (
    <MainLayout>
      <HeadTitle title={`شاپ سنتر | دسته بندی محصولات`}/>
      <div className="mt-12">
        <ul className="grid grid-cols-6 container place-items-center gap-x-2 gap-y-3 md:gap-x-14 md:gap-y-10 lg:gap-x-5 lg:gap-y-3 md:pb-10">
          {filteredProducts.map((pItem) => (
            <li
              className="col-span-3 md:col-span-2 xl:col-span-1 border border-gray-200 rounded-xl overflow-hidden h-[290px] md:h-[300px] lg:h-[390px] relative"
              key={pItem.id}
            >
              <ProductCard items={pItem} />
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
};

export default CategoryPage;

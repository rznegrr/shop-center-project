import React from "react";
import ProductList from "../../components/products/ProductsList";
import MainLayout from "../../components/layout/MainLayout";
import HeadTitle from "../../components/UI/headTitle";

function ProductPage() {
  return (
    <MainLayout>
      <HeadTitle title={`شاپ سنتر | محصولات`}/>
      <div className="mt-12">
        <ProductList start={0} end={23} />
      </div>
    </MainLayout>
  );
}

export default ProductPage;

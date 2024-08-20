import React from "react";
import ProductList from "../../components/products/ProductsList";
import MainLayout from "../../components/layout/MainLayout";

function ProductPage() {
  return (
    <MainLayout>
      <div className="mt-12">
        <ProductList start={0} end={23} />
      </div>
    </MainLayout>
  );
}

export default ProductPage;

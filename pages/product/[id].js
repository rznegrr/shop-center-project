import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Products from "../../data/products.json";
import ProductDetail from "../../components/products/ProductDetail";

function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const productData = Products.find((prod) => prod.id === id);
      setProduct(productData || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
}

export default ProductDetailPage;
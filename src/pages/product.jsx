import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrums/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox"; // ✅ added this
import RelatedProducts from "../components/RelatedProducts/RelatedProduts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Convert productId to a number to match your product IDs
  const product = all_product?.find((e) => e.id === Number(productId));

  // If no product found yet, show loading or fallback
  if (!product) {
    return <div className="loading">Loading product...</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox /> 
<RelatedProducts />
    </div>
  );
};

export default Product;

import React from "react";
import "./ProductList.scss"
import ProductCard from "../ProductCard/ProductCard";
import data from "../../data/data.js";

const ProductList = () => {
  return (
    <div className="product-list">
      {data.map((item) => {
          return <ProductCard key={item.data.id} {...item.data} />;
        })
      }
    </div>
  );
};

export default ProductList;

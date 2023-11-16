import { useState } from "react";
import ProductCard from "../components/ProductCard";
import useInput from "../hooks/useInput";

const ProductsPage = ({ productList }) => {
  const [filterText, filterChangeHandler] = useInput();

  return (
    <div>
      <h1>Ürünler Sayfası</h1>
      <hr />
      <div>
        <input
          type="text"
          onChange={filterChangeHandler}
          value={filterText}
          placeholder="Type to filter..."
        />
      </div>
      <div className="product-list gap-1">
        {productList
          ?.filter((product) => product.name.includes(filterText))
          ?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsPage;

import { useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductsPage = ({ productList }) => {
  const [filterText, setFilterText] = useState("");

  return (
    <div>
      <h1>Ürünler Sayfası</h1>
      <hr />
      <div>
        <input
          type="text"
          onChange={(e) => setFilterText(e.target.value)}
          value={filterText}
          placeholder="Type to filter..."
        />
      </div>
      <div className="product-list gap-1">
        {productList
          ?.filter((product) => product.name.includes(filterText))
          ?.map((product) => (
            <ProductCard product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsPage;

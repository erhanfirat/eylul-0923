import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import useInput from "../hooks/useInput";

const ProductsReduxPage = () => {
  const [filterText, filterChangeHandler] = useInput();

  const productTitle = useSelector((store) => store.product.title);
  const { total, list } = useSelector((store) => store.product);

  return (
    <div>
      <h1>
        {productTitle} [{total}]
      </h1>
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
        {list
          ?.filter((product) => product.name.includes(filterText))
          ?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsReduxPage;

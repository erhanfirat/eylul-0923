import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import useInput from "../hooks/useInput";
import { useEffect } from "react";
import {
  FETCH_STATES,
  fetchProductsActionCreator,
} from "../store/actions/productActions";

const ProductsReduxPage = () => {
  const [filterText, filterChangeHandler] = useInput();

  const productTitle = useSelector((store) => store.product.title);
  const { total, list, fetchState, title } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    console.warn("ÜRÜN SAYISINDA DEĞİŞİKLİK TESPİT ETTİK!");
  }, [total]);

  useEffect(() => {
    fetchState === FETCH_STATES.notFethed &&
      dispatch(fetchProductsActionCreator());
  }, []);

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

import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductActionCreator } from "../store/actions/productActions";

const EditProductPage = () => {
  const { product } = useSelector((store) => store.product);
  const { productId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductActionCreator(productId));
  }, [productId]);

  return (
    <div>
      <h1>
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          <i className="fa-solid fa-chevron-left" />
        </button>{" "}
        Edit: {productId} - {product?.name}
      </h1>
      <hr />
      <ProductForm productData={product} />
    </div>
  );
};

export default EditProductPage;

import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const EditProductPage = ({ productList, fetchProducts }) => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const pro = productList?.find((pro) => pro.id == productId);
    setProduct(pro);
  }, [productList, productId]);

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
      <ProductForm productData={product} fetchProducts={fetchProducts} />
    </div>
  );
};

export default EditProductPage;

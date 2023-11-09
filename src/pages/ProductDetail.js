import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const ProductDetail = ({ productList }) => {
  const [product, setProduct] = useState();
  const { productId, productName } = useParams();
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
        Detail: {productId}/{productName} - {product?.name}
      </h1>
      <hr />
      <img src={product?.img} />
      <p>{product?.description}</p>
      <p>{product?.price}</p>
    </div>
  );
};

export default ProductDetail;

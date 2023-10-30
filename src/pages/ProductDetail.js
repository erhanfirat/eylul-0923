import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ productList }) => {
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    const pro = productList?.find((pro) => pro.id == productId);
    setProduct(pro);
  }, [productList, productId]);

  return (
    <div>
      <h1>
        Detail: {productId} - {product?.name}
      </h1>
      <hr />
      <img src={product?.img} />
      <p>{product?.description}</p>
      <p>{product?.price}</p>
    </div>
  );
};

export default ProductDetail;

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteProductAction,
  deleteProductActionCreator,
} from "../store/actions/productActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <img src={product.img} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">{product.price}</p>
      <Link
        className="btn btn-primary"
        to={`/products/${product.id}/${product.name
          .replaceAll(" ", "-")
          .toLowerCase()}`}
      >
        <i className="fa-solid fa-search me-2" />
        İncele
      </Link>
      <Link className="btn btn-primary" to={`/edit-product/${product.id}`}>
        <i className="fa-solid fa-pen me-2" />
        Düzenle
      </Link>
      <button
        className="btn btn-danger"
        onClick={() => {
          console.time();
          dispatch(deleteProductActionCreator(product.id));
          console.timeEnd();
        }}
      >
        <i className="fa-solid fa-trash me-2" />
        Sil
      </button>
    </div>
  );
};

export default ProductCard;

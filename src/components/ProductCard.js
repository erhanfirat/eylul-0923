import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.img} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">{product.price}</p>
      <Link className="btn btn-primary" to={`/products/${product.id}`}>
        <i className="fa-solid fa-search me-2" />
        İncele
      </Link>
    </div>
  );
};

export default ProductCard;

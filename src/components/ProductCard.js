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
      <Link className="btn btn-primary" to={`/edit-product/${product.id}`}>
        <i className="fa-solid fa-pen me-2" />
        Düzenle
      </Link>
    </div>
  );
};

export default ProductCard;

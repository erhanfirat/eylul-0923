const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.img} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">{product.price}</p>
    </div>
  );
};

export default ProductCard;

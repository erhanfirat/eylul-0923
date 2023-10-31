import ProductForm from "../components/ProductForm";

const CreateProductPage = ({ fetchProducts }) => {
  return (
    <div>
      <h1>Create Product</h1>
      <hr />
      <ProductForm fetchProducts={fetchProducts} />
    </div>
  );
};

export default CreateProductPage;

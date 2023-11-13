import ProductForm from "../components/ProductForm";
import ProductHookForm from "../components/ProductHookForm";

const CreateProductPage = ({ fetchProducts }) => {
  return (
    <div>
      <h1>Create Product</h1>
      <hr />
      {/* <ProductForm fetchProducts={fetchProducts} /> */}
      <ProductHookForm />
    </div>
  );
};

export default CreateProductPage;

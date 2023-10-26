import ProductsPage from "../pages/ProductsPage";

const PageContent = ({ productList }) => {
  return (
    <div>
      <ProductsPage productList={productList} />
    </div>
  );
};

export default PageContent;

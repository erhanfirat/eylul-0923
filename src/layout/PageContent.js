import { Switch, Route } from "react-router-dom";
import CounterPage from "../pages/CounterPage";
import ProductsPage from "../pages/ProductsPage";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ProductDetail from "../pages/ProductDetail";
import CreateProductPage from "../pages/CreateProductPage";
import EditProductPage from "../pages/EditProductPage";
import SiparisPage from "../pages/SiparisPage";
import LoginPage from "../pages/LoginPage";
import StudentsPage from "../pages/StudentsPage";
import ProductsReduxPage from "../pages/ProductsReduxPage";
import UserPage from "../pages/UserPage";
import StudentsWithCA from "../pages/StudentsWithCA";

const PageContent = ({ productList, fetchProducts, setSiparisFormData }) => {
  return (
    <div>
      <Switch>
        <Route path="/about-us">
          <AboutUsPage />
        </Route>

        <Route path="/counter">
          <CounterPage />
        </Route>

        <Route path="/products" exact>
          <ProductsPage productList={productList} />
        </Route>
        <Route path="/products-redux" exact>
          <ProductsReduxPage productList={productList} />
        </Route>
        <Route path="/products/:productId/:productName" exact>
          <ProductDetail productList={productList} />
        </Route>
        <Route path="/my-account" exact>
          <UserPage />
        </Route>
        <Route path="/edit-product/:productId" exact>
          <EditProductPage
            productList={productList}
            fetchProducts={fetchProducts}
          />
        </Route>

        <Route path="/create-product" exact>
          <CreateProductPage fetchProducts={fetchProducts} />
        </Route>

        <Route path="/students" exact>
          <StudentsWithCA />
        </Route>

        <Route path="/login" exact>
          <LoginPage />
        </Route>

        <Route path="/" exact>
          <HomePage />
          <SiparisPage setSiparisFormData={setSiparisFormData} />
        </Route>
        <Route path="*">
          <h1>404 - Meşhur Not Found Hatası</h1>
          <hr />
          <p>
            Aradığını yanlış yerde arıyorsan aslında aramıyorsundur! Mevlana
          </p>
        </Route>
      </Switch>
    </div>
  );
};

export default PageContent;

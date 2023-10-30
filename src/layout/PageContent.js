import { Switch, Route } from "react-router-dom";
import CounterPage from "../pages/CounterPage";
import ProductsPage from "../pages/ProductsPage";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ProductDetail from "../pages/ProductDetail";

const PageContent = ({ productList }) => {
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
        <Route path="/products/:productId" exact>
          <ProductDetail productList={productList} />
        </Route>
        <Route path="/" exact>
          <HomePage />
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

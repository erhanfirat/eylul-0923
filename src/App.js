// External JS
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

// Internal JS
import Counter, { PI, arr } from "./components/Counter";
import Greeting from "./components/Greeting";
import ProductsPage from "./pages/ProductsPage";
// CSS
import "./App.css";
import Main from "./layout/Main";

function App() {
  const [showCounter, setShowCounter] = useState(true);
  const [user, setUser] = useState({ name: "Anonim", email: "" });
  const [productList, setProductList] = useState();

  const toggleCounter = () => {
    setShowCounter(!showCounter);
  };

  const fetchProducts = () => {
    return axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        setProductList(res.data);
        return res.data;
      });
  };

  // component did mount
  // app loaded
  useEffect(() => {
    fetchProducts();
  }, []);

  return <Main productList={productList} fetchProducts={fetchProducts} />;
}

export default App;

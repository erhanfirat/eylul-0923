// External JS
import { useEffect, useState } from "react";
import axios from "axios";
import { Flip, ToastContainer, toast } from "react-toastify";

// Internal JS

// CSS
import "react-toastify/dist/ReactToastify.css";
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
    toast.success("Uygulama başarıyla yüklendi!" );
    fetchProducts();
  }, []);

  return (
    <>
      <Main productList={productList} fetchProducts={fetchProducts} />;
      <ToastContainer
        position="bottom-center"
        theme="colored"
        autoClose={3000}
        transition={Flip}
      />
    </>
  );
}

export default App;

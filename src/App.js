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

  // component did mount
  // app loaded
  useEffect(() => {
    console.warn("DİKKAT DİKKAT! UYGULAMA YÜKLENMİŞTİR!");
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        console.log("res data > ", res.data);
        setProductList(res.data);
      });
  }, []);

  return (
    <Main productList={productList}  />
    // <div>
    //   <Greeting userName={user.name} language="tr" />
    //   <hr />
    //   <p>Bilmiyorum ne haldayım, Reacti öğreniyorum gündüz gece...</p>
    //   <Button onClick={toggleCounter}>
    //     {showCounter ? "Hide" : "Show"} Counter
    //   </Button>
    //   {showCounter && <Counter name="bir" />}
    //   {showCounter && <Counter name="iki" start={50} />}
    //   {showCounter && <Counter name="üç" start={250} />}
    //   <ProductsPage productList={productList} />
    // </div>
  );
}

export default App;

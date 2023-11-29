// External JS
import { useEffect, useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";

// Internal JS
import Main from "./layout/Main";
import useLocalStorage from "./hooks/useLocalStorage";

// CSS
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { AxiosInstance, renewAxiosInstance } from "./api/api";
import { REQ_TYPES, useAxios } from "./hooks/useAxios";

const languages = [
  { name: "Türkçe", value: "tr" },
  { name: "English", value: "en" },
  { name: "Japaneese", value: "jp" },
  { name: "Kore", value: "co" },
];

const browserLang = Intl.DateTimeFormat().resolvedOptions().locale;
const selectedLang = languages.find((l) => browserLang.includes(l.value));
const initialLanguage = selectedLang ? selectedLang.value : "co";

const themeInitial = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

function App() {
  const [showCounter, setShowCounter] = useState(true);
  const [user, setUser] = useLocalStorage("user", {
    name: "Anonim",
    email: "",
  });
  const [theme, setTheme] = useLocalStorage(
    "theme",
    themeInitial ? themeInitial : "light"
  );
  const [productList, setProductList] = useState();
  const [language, setLanguage] = useLocalStorage("language", initialLanguage);

  const [products, getProducts, productsLoading] = useAxios({
    endpoint: "/products",
    reqType: REQ_TYPES.GET,
    config: {
      headers: {
        "Custom-Header": "blabla",
      },
    },
  });

  const dispatch = useDispatch();

  const toggleCounter = () => {
    setShowCounter(!showCounter);
  };

  // component did mount
  // app loaded
  useEffect(() => {
    getProducts();
    toast.success("Uygulama başarıyla yüklendi!");

    // todo: localStorage kontrol et token var mı?
    const token = localStorage.getItem("token");

    // token varsa, backend e request atarak kontrol edicek

    if (token) {
      // backend e istek gönder

      AxiosInstance.get("https://reqres.in/api/users/1")
        .then((res) => {
          console.log("token verify res > ", res);
          // login oldu
          const user = res.data.data;
          dispatch({
            type: "SET_USER_NAME",
            payload: user.first_name,
          });
          dispatch({
            type: "SET_USER_EMAIL",
            payload: user.email,
          });
        })
        .catch((err) => {
          console.log("token verify err > ", err);
          // token geçersiz
          localStorage.removeItem("token");
          renewAxiosInstance();
        });
    }
  }, []);

  useEffect(() => {
    console.log("Products datası güncellendi: ", products);
  }, [products]);

  return (
    <>
      {productsLoading && (
        <p>
          <Spinner /> Ürün dataları yükleniyor...
        </p>
      )}
      <Main productList={productList} />;
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

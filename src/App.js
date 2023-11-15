// External JS
import { useEffect, useState } from "react";
import axios from "axios";
import { Flip, ToastContainer, toast } from "react-toastify";

// Internal JS

// CSS
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Main from "./layout/Main";
import { Button } from "react-bootstrap";
import useLocalStorage from "./hooks/useLocalStorage";

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
    toast.success("Uygulama başarıyla yüklendi!");
    fetchProducts();
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          setUser({ name: "ali", email: "ali@ali.com" });
        }}
      >
        Set User
      </Button>
      <Button
        onClick={() => {
          console.log("user > ", user);
        }}
      >
        Log User
      </Button>
      {language} |
      <select
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      >
        {languages.map((lang) => (
          <option value={lang.value}>{lang.name}</option>
        ))}
      </select>
      <select
        value={theme}
        onChange={(e) => {
          setTheme(e.target.value);
        }}
      >
        <option value={"dark"}>{"Dark"}</option>
        <option value={"light"}>{"Light"}</option>
      </select>
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

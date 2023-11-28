// External JS
import { useEffect, useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

// Internal JS
import Main from "./layout/Main";
import useLocalStorage from "./hooks/useLocalStorage";

// CSS
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { AxiosInstance, renewAxiosInstance } from "./api/api";

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

  const dispatch = useDispatch();

  const toggleCounter = () => {
    setShowCounter(!showCounter);
  };

  // component did mount
  // app loaded
  useEffect(() => {
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
      <span data-testid="lang-value">{language}</span>|
      <select
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
        data-testid="lang-select"
      >
        {languages.map((lang) => (
          <option value={lang.value} key={lang.value}>
            {lang.name}
          </option>
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

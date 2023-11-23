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

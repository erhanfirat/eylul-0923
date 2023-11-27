// theme, language

import { createContext, useState } from "react";

export const GlobalContextObject = createContext();

const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("tr");

  return (
    <GlobalContextObject.Provider
      value={{ theme, setTheme, language, setLanguage }}
    >
      {children}
    </GlobalContextObject.Provider>
  );
};

export default GlobalContextProvider;

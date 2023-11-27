import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { CounterContextProvider } from "./context/CounterContext";
import StudentContextProvider from "./context/StudentContext";
import GlobalContextProvider from "./context/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CounterContextProvider>
      <StudentContextProvider>
        <GlobalContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </GlobalContextProvider>
      </StudentContextProvider>
    </CounterContextProvider>
  </Provider>
);

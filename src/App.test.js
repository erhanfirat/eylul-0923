import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { CounterContextProvider } from "./context/CounterContext";
import StudentContextProvider from "./context/StudentContext";
import GlobalContextProvider from "./context/GlobalContext";
import { store } from "./store/store";

test("App load success check!", () => {
  render(
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
  //
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test("Language Selection change test", () => {
  render(
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
  // const langSelect = screen.getByTestId("lang-select");
  // fireEvent.change(langSelect, { target: { value: "tr" } });

  // const langValue = screen.getByTestId("lang-value");
  // expect(langValue).toHaveTextContent("tr");
});

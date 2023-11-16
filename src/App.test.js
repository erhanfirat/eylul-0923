import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("App load success check!", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  //
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test("Language Selection change test", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const langSelect = screen.getByTestId("lang-select");
  fireEvent.change(langSelect, { target: { value: "tr" } });

  const langValue = screen.getByTestId("lang-value");
  expect(langValue).toHaveTextContent("tr");
});

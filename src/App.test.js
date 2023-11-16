import { render, screen } from "@testing-library/react";
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

import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("Counter load test", () => {
  render(<Counter start={0} name={"test counter"} />);
  screen.debug();
});

test("Counter increase descrease buttons test", () => {
  render(<Counter start={10} name={"test counter"} />);

  const arttirBtn = screen.getByTestId("yumurta-arttir-btn");
  expect(arttirBtn).toHaveTextContent("Arttır");

  const counterVal = screen.getByTestId("counter-value");
  expect(counterVal).toHaveTextContent("10");

  fireEvent.click(arttirBtn);
  expect(counterVal).toHaveTextContent("11");

  const azaltBtn = screen.getByTestId("azalt-btn");
  expect(azaltBtn).toHaveTextContent("Azalt");
  fireEvent.click(azaltBtn);
  fireEvent.click(azaltBtn);
  expect(counterVal).toHaveTextContent("9");
});

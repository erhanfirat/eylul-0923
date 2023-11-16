import { render } from "@testing-library/react";
import Counter from "./Counter";

test("Counter load test", () => {
  render(<Counter start={0} name={"test counter"} />);
});

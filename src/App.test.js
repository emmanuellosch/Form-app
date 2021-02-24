import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a Headline", () => {
  render(<App />);
  const headline = screen.getByText(/add a Product/i);
  expect(headline).toBeInTheDocument();
});

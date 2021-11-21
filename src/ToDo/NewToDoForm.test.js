import React from "react";
import { render } from "@testing-library/react";
import NewToDoForm from "./NewToDoForm";

it("should render NewBoxForm", () => {
  render(<NewToDoForm />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<NewToDoForm />);
  expect(asFragment).toMatchSnapshot();
});
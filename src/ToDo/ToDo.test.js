import React from "react";
import { render } from "@testing-library/react";
import ToDo from "./ToDo";

it("should render Box component", () => {
  render(<ToDo />);
});

it("should match snapshot", () => {
    const {asFragment} = render(<ToDo />);
    expect(asFragment).toMatchSnapshot();
});
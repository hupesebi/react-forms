import React from "react";
import { fireEvent, render } from "@testing-library/react";
import ToDoList from "./ToDoList";

it("should render BoxList", () => {
  render(<ToDoList />);
});

it("snapshot should match", () => {
  const { asFragment } = render(<ToDoList />);
  expect(asFragment).toMatchSnapshot();
});

it("add a box", () => {
  const { queryByText, queryByLabelText } = render(<ToDoList />);

  expect(queryByText("X")).not.toBeInTheDocument();

  const name = queryByLabelText("Add Todo:");
  const btn = queryByText("Add");
  fireEvent.change(name, { target: { value: "test" } });
  fireEvent.click(btn);

  expect(queryByText("X")).toBeInTheDocument();
});

it("remove a box", () => {
  const { queryByText, queryByLabelText } = render(<ToDoList />);

  expect(queryByText("X")).not.toBeInTheDocument();

  const name = queryByLabelText("Add Todo:");
  const btn = queryByText("Add");
  fireEvent.change(name, { target: { value: "test" } });
  fireEvent.click(btn);

  expect(queryByText("X")).toBeInTheDocument();

  const removeBtn = queryByText("X");
  fireEvent.click(removeBtn);
  expect(queryByText("X")).not.toBeInTheDocument();
  
});
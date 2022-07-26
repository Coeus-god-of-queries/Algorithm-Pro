import React from "react";
import  Whiteboard from "../src/client/Components/Whiteboard";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';

it("renders without crashing", () => {
  render(
      Whiteboard() 
  );

  expect(screen.getByText("Logout")).toBeInTheDocument();
  // use queryBy* for checking existence,
  // no element with text "Login" should be on screen
  expect(screen.queryByText("Login")).toBe(null); 

  // Simulate clicking on "Logout"
  fireEvent.click(screen.getByText("Logout"));
  // Now "Login" should be on screen
  expect(screen.getByText("Login")).toBeInTheDocument();

  // Click again so that "Login" disappears
  fireEvent.click(screen.getByText("Login"));
  // "Logout" should be gone
  expect(screen.queryByText("Logout")).toBe(null);

  // cleanup done automatically
});

function Whiteboard(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
  throw new Error("Function not implemented.");
}

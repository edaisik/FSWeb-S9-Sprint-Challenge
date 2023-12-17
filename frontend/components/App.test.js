// Write your tests here
import { findByText, render, screen } from "@testing-library/react";
import AppFunctional from "./AppFunctional";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

beforeEach(() => {
  render(<AppFunctional />);
});
it("uptest", async () => {
  const up = screen.getByTestId("up");
  userEvent.click(up);
  const message = await screen.findByText(/2, 1/);
  expect(message).toBeInTheDocument();
});

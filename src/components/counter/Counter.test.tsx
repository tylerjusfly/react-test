import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
    // const amountInput = screen.getByRole('spinbutton')
    // expect(amountInput).toBeInTheDocument()
    // const setButton = screen.getByRole('button', { name: 'Set' })
    // expect(setButton).toBeInTheDocument()
  });

  test("get count state", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading", {
      level: 1,
    });

    expect(countElement).toHaveTextContent("0");
  });

  test("render plus 1 if button is clicked", async () => {
    user.setup();
    render(<Counter />);
    // get button
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    await user.click(incrementButton);

    const countElement = screen.getByRole("heading", {
      level: 1,
    });

    expect(countElement).toHaveTextContent("1");
  });

  test("counts equals to 2 when button is clicked multiple times", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });

    await user.dblClick(incrementButton);

    const countElement = screen.getByRole("heading", {
      level: 1,
    });

    expect(countElement).toHaveTextContent("2");
  });
});

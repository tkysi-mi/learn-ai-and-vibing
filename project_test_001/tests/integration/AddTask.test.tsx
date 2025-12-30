import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import App from "../../src/App";

describe("Integration: Add Task", () => {
  it("should allow user to add a new task", async () => {
    render(<App />);
    const user = userEvent.setup();

    // Verify initial state
    expect(
      screen.getByText("No tasks yet. Add one above!")
    ).toBeInTheDocument();

    // Type task title
    const input = screen.getByRole("textbox", { name: /new task title/i });
    await user.type(input, "Buy milk");

    // Click add button
    const addButton = screen.getByRole("button", { name: /add task/i });
    await user.click(addButton);

    // Verify task is added
    expect(screen.getByText("Buy milk")).toBeInTheDocument();

    // Verify input is cleared
    expect(input).toHaveValue("");
  });

  it("should not add empty tasks", async () => {
    render(<App />);
    const user = userEvent.setup();

    const input = screen.getByRole("textbox", { name: /new task title/i });
    const addButton = screen.getByRole("button", { name: /add task/i });

    // Verify button is disabled initially
    expect(addButton).toBeDisabled();

    // Try to click anyway (though disabled)
    await user.click(addButton);

    // Verify no task added (still empty state)
    expect(
      screen.getByText("No tasks yet. Add one above!")
    ).toBeInTheDocument();
  });
});

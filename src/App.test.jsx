import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";

// describe("app", () => {
//   it("app render", () => {
//     render(<App />);
//     expect(screen.getByTestId("span"))
//   });
// });

describe("app_action", () => {
  it("user Action", async () => {
    userEvent.setup();
    render(<App />);

    // Get the element with the count and extract its text content
    const beforeInc = screen.getByTestId("span");
    expect(beforeInc).toHaveTextContent(0);

    // Find the button and click it
    const submit = screen.getByRole("button");
    await userEvent.click(submit);

    // // Get the element again and check the updated text content
    const afterInc = screen.getByTestId("span");
    expect(afterInc).toHaveTextContent(2);
  });
});

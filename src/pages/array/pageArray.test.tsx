import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PageArray } from "@/pages/array/pageArray";

describe("PageArray component", () => {
  it("renders without crashing", () => {
    render(<PageArray />);
  });

  it("correctly handles input value change", () => {
    const { getByLabelText } = render(<PageArray />);
    const input = getByLabelText("Array") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "19 2 42 18" } });

    expect(input.value).toBe("19 2 42 18");
  });

  it('correctly calculates sumArray for input "19 2 42 18"', () => {
    const { getByLabelText, getByText } = render(<PageArray />);
    const input = getByLabelText("Array") as HTMLInputElement;
    const button = getByText("Test");

    fireEvent.change(input, { target: { value: "19 2 42 18" } });
    fireEvent.click(button);

    expect(input.value).toBe("61");
  });

  it('correctly calculates sumArray for input "61 32 51"', () => {
    const { getByLabelText, getByText } = render(<PageArray />);
    const input = getByLabelText("Array") as HTMLInputElement;
    const button = getByText("Test");

    fireEvent.change(input, { target: { value: "61 32 51" } });
    fireEvent.click(button);

    expect(input.value).toBe("93");
  });

  it("correctly handles empty input", () => {
    const { getByLabelText, getByText } = render(<PageArray />);
    const input = getByLabelText("Array") as HTMLInputElement;
    const button = getByText("Test");

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(button);

    expect(input.value).toBe("0");
  });
});

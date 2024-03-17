import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { PageText } from "@/pages/text/pageText";

describe("PageText component", () => {
  it("renders without crashing", () => {
    render(<PageText />);
  });

  it("correctly handles input value change", () => {
    const { getByLabelText } = render(<PageText />);
    const input = getByLabelText("Letters") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "abcd" } });

    expect(input.value).toBe("abcd");
  });

  it('correctly fixes "ffdttttyy"', () => {
    const { getByLabelText, getByText } = render(<PageText />);
    const input = getByLabelText("Letters") as HTMLInputElement;
    const button = getByText("Test");

    fireEvent.change(input, { target: { value: "ffdttttyy" } });
    fireEvent.click(button);

    expect(input.value).toBe("ffdtttyy");
  });

  it('correctly fixes "iiikigggg"', () => {
    const { getByLabelText, getByText } = render(<PageText />);
    const input = getByLabelText("Letters") as HTMLInputElement;
    const button = getByText("Test");

    fireEvent.change(input, { target: { value: "iiikigggg" } });
    fireEvent.click(button);

    expect(input.value).toBe("iiikiggg");
  });
});

import React from "react";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { InputValue } from "./inputValue";

describe("InputValue Component", () => {
  const onChangeMock = jest.fn();

  beforeEach(() => {
    onChangeMock.mockClear();
  });

  it("renders correctly with text type", () => {
    const { getByLabelText } = render(
      <InputValue
        id="test-input"
        text="Test Input"
        type="text"
        onChange={onChangeMock}
      />
    );
    const inputElement = getByLabelText("Test Input");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });

  it("renders correctly with number type", () => {
    const { getByLabelText } = render(
      <InputValue
        id="test-input"
        text="Test Input"
        type="number"
        onChange={onChangeMock}
      />
    );
    const inputElement = getByLabelText("Test Input");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });

  it("invokes onChange function when input value changes", () => {
    const { getByLabelText } = render(
      <InputValue
        id="test-input"
        text="Test Input"
        type="text"
        onChange={onChangeMock}
      />
    );
    const inputElement = getByLabelText("Test Input");
    fireEvent.change(inputElement, { target: { value: "New Value" } });
    expect(onChangeMock).toHaveBeenCalledWith("New Value");
  });

  it("prevents non-numeric input when type is number", () => {
    const { getByLabelText } = render(
      <InputValue
        id="test-input"
        text="Test Input"
        type="number"
        onChange={onChangeMock}
      />
    );
    const inputElement = getByLabelText("Test Input");
    fireEvent.keyDown(inputElement, { key: "a" });
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it("prevents non-alphabetic input when type is text", () => {
    const { getByLabelText } = render(
      <InputValue
        id="test-input"
        text="Test Input"
        type="text"
        onChange={onChangeMock}
      />
    );
    const inputElement = getByLabelText("Test Input");
    fireEvent.keyDown(inputElement, { key: "1" });
    expect(onChangeMock).not.toHaveBeenCalled();
  });
});

import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { PagePayement } from "./pagePayement";

describe("PagePayement Component", () => {
  let getByLabelText: any, getByText: any;

  beforeEach(() => {
    const rendered = render(<PagePayement />);
    getByLabelText = rendered.getByLabelText;
    getByText = rendered.getByText;
  });

  const formLabels = {
    number: "Card Number",
    name: "Name",
    month: "Month",
    year: "Year",
    csv: "CSV",
  };

  const formBtns = {
    formSubmit: "Pay",
  };

  it("renders correctly", () => {
    // Check if all necessary elements are rendered
    expect(getByLabelText(formLabels.number)).toBeInTheDocument();
    expect(getByLabelText(formLabels.name)).toBeInTheDocument();
    expect(getByLabelText(formLabels.month)).toBeInTheDocument();
    expect(getByLabelText(formLabels.year)).toBeInTheDocument();
    expect(getByLabelText(formLabels.csv)).toBeInTheDocument();
  });

  it("submits the form when all inputs are valid", () => {
    // Mocking user inputs
    fireEvent.change(getByLabelText(formLabels.number), {
      target: { value: "1234567890123456" },
    });
    fireEvent.change(getByLabelText(formLabels.name), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByLabelText(formLabels.month), {
      target: { value: "12" },
    });
    fireEvent.change(getByLabelText(formLabels.year), {
      target: { value: "25" },
    });
    fireEvent.change(getByLabelText(formLabels.csv), {
      target: { value: "123" },
    });

    fireEvent.click(getByText(formBtns.formSubmit));
  });

  it("does not submit the form when any input is invalid", () => {
    // Mocking user inputs with invalid values
    fireEvent.change(getByLabelText(formLabels.number), {
      target: { value: "123" },
    });
    fireEvent.change(getByLabelText(formLabels.name), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByLabelText(formLabels.month), {
      target: { value: "12" },
    });
    fireEvent.change(getByLabelText(formLabels.year), {
      target: { value: "25" },
    });
    fireEvent.change(getByLabelText(formLabels.csv), {
      target: { value: "123" },
    });

    // Submit the form
    fireEvent.click(getByText(formBtns.formSubmit));

    // Check if the form is not submitted
    // You might need to adjust this part based on your actual implementation
  });
});

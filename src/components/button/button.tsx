import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Btn = styled.button<{ interactable: number }>`
  display: inline-block;
  font-size: 1em;
  display: block;
  width: 100%;
  background-color: ${(p) => (p.interactable === 1 ? "purple" : "#808080ab")};
  border: 2px solid ${(p) => (p.interactable === 1 ? "#6c26a7" : "#80808000")};
  border-radius: 3px;
`;

const BtnLabel = styled.label<{ interactable: number }>`
  color: ${(p) => (p.interactable === 1 ? "white" : "#6e6e6e")};
`;

export const Button: FunctionComponent<{
  type: "submit" | "reset" | "button";
  text: string;
  disabled: boolean;
}> = ({ type, text, disabled }) => {
  const interactable = disabled ? 0 : 1;
  return (
    <Btn
      type={type}
      interactable={interactable}
      disabled={disabled}
      aria-disabled={disabled}
    >
      <BtnLabel interactable={interactable}>{text}</BtnLabel>
    </Btn>
  );
};

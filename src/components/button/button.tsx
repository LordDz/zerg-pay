import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Btn = styled.button`
  display: inline-block;
  font-size: 1em;
  border: 2px solid #6c26a7;
  border-radius: 3px;
  display: block;
  width: 100%;
  background-color: purple;
`;

const BtnLabel = styled.label`
  color: white;
`;

export const Button: FunctionComponent<{
  type: "submit" | "reset" | "button";
  text: string;
}> = ({ type, text }) => {
  return (
    <Btn type={type}>
      <BtnLabel>{text}</BtnLabel>
    </Btn>
  );
};

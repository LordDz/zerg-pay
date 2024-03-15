import React, { ChangeEventHandler, FunctionComponent } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputType = styled.input`
  width: 100%;
  height: 20px;
  border-radius: 4px;

  display: block;
  word-wrap: break-word;
  columns: 5;
  -webkit-columns: 5;
  -moz-columns: 5;
  column-gap: 0.2em;
  -webkit-column-gap: 0.2em;
  -moz-column-gap: 0.2em;
`;

const InputLabel = styled.label`
  display: flex;
  width: max-content;
  text-shadow: 2px 2px 5px black;
`;

export const InputValue: FunctionComponent<{
  text: string;
  type: "number" | "text";
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}> = ({ text, value, onChange }) => {
  return (
    <InputContainer>
      <InputLabel>{text}</InputLabel>
      <InputType type="text" value={value} onChange={onChange} />
    </InputContainer>
  );
};

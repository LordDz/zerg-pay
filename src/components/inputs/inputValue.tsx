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
`;

const InputLabel = styled.label`
  display: flex;
  width: max-content;
  text-shadow: 2px 2px 5px black;
`;

export const InputValue: FunctionComponent<{
  text: string;
  type: "number" | "text";
  onChange: ChangeEventHandler<HTMLInputElement>;
}> = ({ text, onChange }) => {
  return (
    <InputContainer>
      <InputLabel>{text}</InputLabel>
      <InputType type="text" onChange={onChange} />
    </InputContainer>
  );
};

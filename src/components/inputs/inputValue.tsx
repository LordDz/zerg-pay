import React, { FunctionComponent } from "react";
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

  // display: block;
  // word-wrap: break-word;
  // columns: 5;
  // -webkit-columns: 5;
  // -moz-columns: 5;
  // column-gap: 0.2em;
  // -webkit-column-gap: 0.2em;
  // -moz-column-gap: 0.2em;
`;

const InputLabel = styled.label`
  display: flex;
  width: max-content;
  text-shadow: 2px 2px 5px black;

  background: #0000009c;
  padding: 0 0.2em 0 0;
  border-radius: 2px;
`;

export const InputValue: FunctionComponent<{
  id: string;
  text: string;
  type: "number" | "text";
  value?: string;
  max?: number;
  disabled?: boolean;
  onChange: (val: string) => void;
}> = ({ id, text, type, value, max, disabled, onChange }) => {
  const onInputChanged = (evt: any) => {
    onChange(evt?.target?.value ? evt.target.value : "");
  };

  return (
    <InputContainer>
      <InputLabel htmlFor={id}>{text}</InputLabel>
      <InputType
        key={id}
        id={id}
        onKeyDown={(event) => {
          if (
            event.key !== "Backspace" &&
            event.key !== " " &&
            !(event.ctrlKey && (event.key === "a" || event.key === "x")) &&
            (type == "number"
              ? !/[0-9]/.test(event.key)
              : !/^[a-zA-Z\s]*$/.test(event.key))
          ) {
            event.preventDefault();
          }
        }}
        aria-label={text}
        type="text"
        value={value}
        maxLength={max}
        onChange={onInputChanged}
        disabled={disabled}
        required
      />
    </InputContainer>
  );
};

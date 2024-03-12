import React, { FunctionComponent, MouseEventHandler } from "react";

export const Button: FunctionComponent<{
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}> = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      <label>{text}</label>
    </button>
  );
};

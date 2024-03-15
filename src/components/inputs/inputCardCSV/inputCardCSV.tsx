import React, { FunctionComponent, useState } from "react";
import { InputValue } from "../inputValue";
import { isNumeric } from "@/helpers/value/isNumeric";

export const InputCardCSV: FunctionComponent<{}> = ({}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [displayValue, setDisplayValue] = useState<string>("");

  const onInputChanged = (evt: any) => {
    const value = evt?.target?.value;
    if (!value || value == undefined || value == null || value.length < 1) {
      return;
    }

    const valueStr = value as string;

    const isNumber = isNumeric(valueStr);
    if (!isNumber) return;

    setInputValue(valueStr);
  };

  return (
    <InputValue
      text={"CSV"}
      type={"number"}
      value={inputValue}
      displayValue={displayValue}
      min={3}
      max={3}
      onChange={onInputChanged}
    />
  );
};

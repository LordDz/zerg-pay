import React, { FunctionComponent, useState } from "react";
import { InputValue } from "../inputValue";
import { isNumeric } from "@/helpers/value/isNumeric";
import { CardTypes } from "@/enums/card/cardTypes";

export const InputCardCSV: FunctionComponent<{ cardType: CardTypes }> = ({
  cardType,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [displayValue, setDisplayValue] = useState<string>("");

  const onInputChanged = (evt: any) => {
    const value = evt?.target?.value;
    if (!value || value == undefined || value == null || value.length < 1) {
      setInputValue("");
      return;
    }

    const valueStr = value as string;

    const isNumber = isNumeric(valueStr);
    if (!isNumber) return;

    setInputValue(valueStr);
  };

  return (
    <InputValue
      id={"cardCsv"}
      text={"CSV"}
      type={"number"}
      value={inputValue}
      displayValue={displayValue}
      max={cardType == CardTypes.americanExpress ? 4 : 3}
      disabled={cardType == CardTypes.unknown}
      onChange={onInputChanged}
    />
  );
};

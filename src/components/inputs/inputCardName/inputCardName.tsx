import React, { FunctionComponent, useState } from "react";
import { InputValue } from "../inputValue";
import { CardTypes } from "@/enums/card/cardTypes";
import { isText } from "@/helpers/value/isText";

export const InputCardName: FunctionComponent<{}> = ({}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [displayValue, setDisplayValue] = useState<string>("");
  const [cardType, setCardType] = useState<CardTypes>(CardTypes.unknown);

  const onInputChanged = (evt: any) => {
    const value = evt?.target?.value;

    let valueStr = value as string;

    const isOk = isText(valueStr);
    if (!isOk) return;

    setInputValue(valueStr);

    console.log("isOk: ", isText);
  };

  return (
    <InputValue
      id={"cardName"}
      text={"Name"}
      type={"text"}
      value={inputValue}
      displayValue={displayValue}
      min={4}
      max={1000}
      onChange={onInputChanged}
    />
  );
};

import React, { FunctionComponent, useState } from "react";
import { InputValue } from "../inputValue";
import { CardTypes } from "@/enums/card/cardTypes";
import { isText } from "@/helpers/value/isText";
import { CardFormInputs } from "@/enums/card/cardFormInputs";

export const InputCardName: FunctionComponent<{
  onValid: (key: CardFormInputs, isValid: boolean) => void;
}> = ({ onValid }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [cardType, setCardType] = useState<CardTypes>(CardTypes.unknown);

  const onInputChanged = (value: string) => {
    const isOk = isText(value);
    if (!isOk) {
      onValid(CardFormInputs.name, false);
    }
    setInputValue(value);

    if (value.length > 3) {
      onValid(CardFormInputs.name, true);
    }
  };

  return (
    <InputValue
      id={"cardName"}
      text={"Name"}
      type={"text"}
      value={inputValue}
      max={1000}
      onChange={onInputChanged}
    />
  );
};

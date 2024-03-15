import React, { FunctionComponent, useState } from "react";
import { InputValue } from "../inputValue";
import { getCardStartsWith } from "@/helpers/card/getCardType";
import { CardTypes } from "@/enums/card/cardTypes";
import { validateCardNumber } from "@/helpers/card/validateCardNumber";
import { isNumeric } from "@/helpers/value/isNumeric";

export const InputCardNumber: FunctionComponent<{}> = ({}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [displayValue, setDisplayValue] = useState<string>("");
  const [cardType, setCardType] = useState<CardTypes>(CardTypes.unknown);

  const onInputChanged = (evt: any) => {
    const value = evt?.target?.value;
    if (!value || value == undefined || value == null || value.length < 1) {
      setCardType(CardTypes.unknown);
    }

    let valueStr = value as string;

    const isNumber = isNumeric(valueStr);

    console.log("isNumber: ", isNumber);

    if (!isNumber) return;

    setInputValue(valueStr);

    if (valueStr.length < 2) {
      const cardType = getCardStartsWith(valueStr);
      setCardType(cardType);
      console.log("cardType: ", cardType);
      return;
    }

    if (
      (cardType == CardTypes.americanExpress && valueStr.length >= 15) ||
      valueStr.length > 15
    ) {
      const isValidated = validateCardNumber(value);

      console.log("isValidated: ", isValidated);
    }
  };

  return (
    <InputValue
      text={"Card Number"}
      type={"number"}
      value={inputValue}
      displayValue={displayValue}
      min={15}
      max={16}
      onChange={onInputChanged}
    />
  );
};
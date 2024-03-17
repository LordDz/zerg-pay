import React, { FunctionComponent, useEffect, useState } from "react";
import { InputValue } from "../inputValue";
import { isNumeric } from "@/helpers/value/isNumeric";
import { CardTypes } from "@/enums/card/cardTypes";
import { CardFormInputs } from "@/enums/card/cardFormInputs";

export const InputCardCSV: FunctionComponent<{
  cardType: CardTypes;
  onValid: (key: CardFormInputs, isValid: boolean) => void;
}> = ({ cardType, onValid }) => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (cardType == CardTypes.unknown) setInputValue("");
  }, [cardType]);

  const onInputChanged = (value: string) => {
    const isNumber = isNumeric(value);
    if (!isNumber) {
      onValid(CardFormInputs.csv, false);
      return;
    }

    setInputValue(value);

    if (value.length >= 3) {
      onValid(CardFormInputs.csv, true);
    } else {
      onValid(CardFormInputs.csv, false);
    }
  };

  return (
    <InputValue
      id={"cardCsv"}
      text={"CSV"}
      type={"number"}
      value={inputValue}
      max={cardType == CardTypes.americanExpress ? 4 : 3}
      disabled={cardType == CardTypes.unknown}
      onChange={onInputChanged}
    />
  );
};

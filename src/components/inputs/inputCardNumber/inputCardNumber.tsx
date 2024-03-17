import React, { FunctionComponent, useState } from "react";
import { InputValue } from "../inputValue";
import { getCardStartsWith } from "@/helpers/card/getCardType";
import { CardTypes } from "@/enums/card/cardTypes";
import { validateCardNumber } from "@/helpers/card/validateCardNumber";
import { isNumeric } from "@/helpers/value/isNumeric";
import { CardFormInputs } from "@/enums/card/cardFormInputs";

export const InputCardNumber: FunctionComponent<{
  currentCard: CardTypes;
  onValid: (key: CardFormInputs, isValid: boolean) => void;
  onChangeCardType: (card: CardTypes) => void;
}> = ({ currentCard, onValid, onChangeCardType }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onInputChanged = (value: string) => {
    if (value.length === 0) {
      onChangeCardType(CardTypes.unknown);
      setInputValue("");
      onValid(CardFormInputs.number, false);
    }

    const isNumber = isNumeric(value);

    if (!isNumber) {
      onValid(CardFormInputs.number, false);
      return;
    }

    setInputValue(value);

    if (value.length < 4) {
      const cardType = getCardStartsWith(value);
      onChangeCardType(cardType);
      onValid(CardFormInputs.number, false);
      return;
    }

    if (
      (currentCard == CardTypes.americanExpress && value.length >= 15) ||
      value.length > 15
    ) {
      const isValidated = validateCardNumber(value);
      onValid(CardFormInputs.number, isValidated);
    }
  };

  return (
    <InputValue
      id={"cardNumber"}
      text={"Card Number"}
      hideInput={true}
      type={"number"}
      value={inputValue}
      max={16}
      onChange={onInputChanged}
    />
  );
};

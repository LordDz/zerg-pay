import React, { FunctionComponent, useState } from "react";
import { InputValue } from "../inputValue";
import { CardFormInputs } from "@/enums/card/cardFormInputs";

export const InputCardDateMonth: FunctionComponent<{
  onValid: (key: CardFormInputs, isValid: boolean) => void;
}> = ({ onValid }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onInputChanged = (val: string) => {
    const month = parseInt(val);

    if (month >= 0 && month <= 12) {
      setInputValue(val);
      onValid(CardFormInputs.month, true);
    } else {
      onValid(CardFormInputs.month, false);
    }
  };

  return (
    <InputValue
      id={"cardMonth"}
      text={"Month"}
      type={"number"}
      value={inputValue}
      max={2}
      onChange={onInputChanged}
    />
  );
};

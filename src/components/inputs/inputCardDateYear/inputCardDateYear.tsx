import React, { FunctionComponent, useState } from "react";
import { InputValue } from "../inputValue";
import { CardFormInputs } from "@/enums/card/cardFormInputs";

export const InputCardDateYear: FunctionComponent<{
  onValid: (key: CardFormInputs, isValid: boolean) => void;
}> = ({ onValid }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onInputChanged = (val: string) => {
    const year = parseInt(val);

    if (year >= 1 && year <= 9000) {
      setInputValue(val);

      if (val.length > 1) {
        onValid(CardFormInputs.year, true);
      }
    } else {
      setInputValue("");
      onValid(CardFormInputs.year, false);
    }
  };

  return (
    <InputValue
      id={"cardYear"}
      text={"Year"}
      type={"number"}
      value={inputValue}
      max={2}
      onChange={onInputChanged}
    />
  );
};

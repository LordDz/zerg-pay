import { Button } from "@/components/button/button";
import { Card } from "@/components/card/card";
import { CardCenter } from "@/components/card/cardCenter/cardCenter";
import { CardColumn } from "@/components/card/cardColumn/cardColumn";
import { InputValue } from "@/components/inputs/inputValue";
import React, { FunctionComponent, useState } from "react";

const sumArray = (numbers: Array<number>) => {
  let biggest = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (sum % 2) {
        if (sum > biggest) {
          biggest = sum;
        }
      }
    }
  }
  return biggest + "";
};

export const PageArray: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const onClickTest = () => {
    const numbers = inputValue.split(" ").map(Number);

    let val = sumArray(numbers);
    setInputValue(val);
  };

  return (
    <Card>
      <CardCenter>
        <CardColumn>
          <InputValue
            id={"cardArrayPage"}
            text={"Array"}
            type={"number"}
            value={inputValue}
            max={150000}
            onChange={setInputValue}
          />
        </CardColumn>

        <CardColumn>
          <Button
            type={"button"}
            text={"Test"}
            disabled={false}
            onClick={onClickTest}
          />
        </CardColumn>
      </CardCenter>
    </Card>
  );
};

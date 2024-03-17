import { Button } from "@/components/button/button";
import { Card } from "@/components/card/card";
import { CardCenter } from "@/components/card/cardCenter/cardCenter";
import { CardColumn } from "@/components/card/cardColumn/cardColumn";
import { InputValue } from "@/components/inputs/inputValue";
import React, { FunctionComponent, useState } from "react";

const fixTest = (text: string) => {
  if (text.length <= 4) {
    return text;
  }

  let count = 0;
  let str = text[0]; //ffdtttyy
  let currentLetter = text[0];
  for (let i = 1; i < text.length; i++) {
    debugger;
    const letter = text[i];
    if (letter === currentLetter) {
      count++;
      if (count >= 3) {
        //Same letter, skip this one
        count = 0;
        continue;
      }
    } else {
      count = 0;
      currentLetter = letter;
    }
    str += letter;
  }
  return str;
};

export const PageText: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const onClickTest = () => {
    let val = fixTest(inputValue);
    setInputValue(val);
  };

  return (
    <Card>
      <CardCenter>
        <CardColumn>
          <InputValue
            id={"cardTextPage"}
            text={"Letters"}
            type={"text"}
            value={inputValue}
            max={1000}
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

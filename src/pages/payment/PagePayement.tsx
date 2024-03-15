import React, { FunctionComponent, useState } from "react";
import { CardColumn } from "../../components/cardColumn/cardColumn";
import { Card } from "@/components/card/card";
import { InputValue } from "@/components/inputs/inputValue";
import { InputCardNumber } from "@/components/inputs/inputCardNumber/inputCardNumber";
import { InputCardName } from "@/components/inputs/inputCardName/inputCardName";
import { InputCardCSV } from "@/components/inputs/inputCardCSV/inputCardCSV";

export const PagePayement: FunctionComponent = () => {
  const [count, setCount] = useState<number>(0);
  const onClick = () => {
    console.log("I love webpack and typescript.");
  };

  const onChange = (evt: any) => {};

  return (
    <form>
      <Card>
        <CardColumn>
          <label>Logo 1</label>
          <label>Logo 2</label>
        </CardColumn>

        <CardColumn>
          <InputCardNumber />
        </CardColumn>

        <CardColumn>
          <CardColumn>
            <InputCardName />
          </CardColumn>

          <CardColumn>
            <InputValue type="number" text="Month" onChange={onChange} />
            <InputValue type="number" text="Year" onChange={onChange} />
            <InputCardCSV />
          </CardColumn>
        </CardColumn>
      </Card>
    </form>
  );
};

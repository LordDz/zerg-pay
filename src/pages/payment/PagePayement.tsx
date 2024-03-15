import React, { FunctionComponent, useState } from "react";
import { CardColumn } from "../../components/cardColumn/cardColumn";
import { Card } from "@/components/card/card";
import { InputValue } from "@/components/inputs/inputValue";

export const PagePayement: FunctionComponent = () => {
  const [count, setCount] = useState<number>(0);
  const onClick = () => {
    console.log("I love webpack and typescript.");
  };

  const onChange = (evt: any) => {
    console.log("evt.target.value: ", evt.target.value);
  };

  return (
    <>
      <form>
        <Card>
          <CardColumn>
            <label>Logo 1</label>
            <label>Logo 2</label>
          </CardColumn>

          <CardColumn>
            <InputValue type="text" text="Card Number" onChange={onChange} />
          </CardColumn>

          <CardColumn>
            <CardColumn>
              <InputValue type="text" text="Card Name" onChange={onChange} />
            </CardColumn>

            <CardColumn>
              <InputValue type="number" text="Month" onChange={onChange} />
              <InputValue type="number" text="Year" onChange={onChange} />
              <InputValue type="number" text="CCV" onChange={onChange} />
            </CardColumn>
          </CardColumn>
        </Card>
      </form>
    </>
  );
};

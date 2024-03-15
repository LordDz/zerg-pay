import React, { FunctionComponent, useState } from "react";
import { CardColumn } from "../../components/cardColumn/cardColumn";
import { Card } from "@/components/card/card";
import { InputCardNumber } from "@/components/inputs/inputCardNumber/inputCardNumber";
import { InputCardName } from "@/components/inputs/inputCardName/inputCardName";
import { InputCardCSV } from "@/components/inputs/inputCardCSV/inputCardCSV";
import { CardTypes } from "@/enums/card/cardTypes";
import { Icon } from "@/components/icons/icon";

export const PagePayement: FunctionComponent = () => {
  const [cardType, setCardType] = useState<CardTypes>(CardTypes.visa);

  const onChange = (evt: any) => {};

  return (
    <form>
      <Card>
        <CardColumn>
          <Icon cardType={CardTypes.unknown} />
          <Icon cardType={cardType} />
        </CardColumn>

        <CardColumn>
          <InputCardNumber />
        </CardColumn>

        <CardColumn>
          <CardColumn>
            <InputCardName />
          </CardColumn>

          <CardColumn>
            {/* <InputValue type="number" text="Month" onChange={onChange} />
            <InputValue type="number" text="Year" onChange={onChange} /> */}
            <InputCardCSV cardType={CardTypes.americanExpress} />
          </CardColumn>
        </CardColumn>
      </Card>
    </form>
  );
};

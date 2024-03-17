import React, { FunctionComponent, useEffect, useState } from "react";
import { Card } from "@/components/card/card";
import { InputCardNumber } from "@/components/inputs/inputCardNumber/inputCardNumber";
import { InputCardName } from "@/components/inputs/inputCardName/inputCardName";
import { InputCardCSV } from "@/components/inputs/inputCardCSV/inputCardCSV";
import { CardTypes } from "@/enums/card/cardTypes";
import { IconPaymentCard } from "@/components/icons/iconPaymentCard";
import { CardColumn } from "@/components/card/cardColumn/cardColumn";
import { InputCardDateMonth } from "@/components/inputs/inputCardDateMonth/inputCardDateMonth";
import { InputCardDateYear } from "@/components/inputs/inputCardDateYear/inputCardDateYear";
import { Button } from "@/components/button/button";
import { CardFormInputs } from "@/enums/card/cardFormInputs";
import { IconSafePay } from "@/components/icons/iconSafePay";
import { CardCenter } from "@/components/card/cardCenter/cardCenter";

const validInputs = {
  number: false,
  name: false,
  month: false,
  year: false,
  csv: false,
};

const checkValid = (valid: any) => {
  if (!valid.name || !valid.year || !valid.month || !valid.csv) {
    return false;
  }
  return true;
};

export const PagePayement: FunctionComponent = () => {
  const [cardType, setCardType] = useState<CardTypes>(CardTypes.unknown);
  const [valid, setValid] = useState(validInputs);
  const [canSubmit, setCanSubmit] = useState(false);

  const onValid = (key: CardFormInputs, isValid: boolean) => {
    setValid((prevValid: any) => ({
      ...prevValid,
      [key]: isValid,
    }));
  };

  useEffect(() => {
    setCanSubmit(checkValid(valid));
  }, [valid]);

  const onChangeCardType = (card: CardTypes) => {
    setCardType(card);
  };

  const onSubmit = () => {
    if (!canSubmit) {
      return false;
    }
    return true;
  };

  return (
    <form onSubmit={onSubmit}>
      <Card>
        <CardColumn>
          {valid.number ? <IconSafePay /> : <div></div>}
          <IconPaymentCard cardType={cardType} key={cardType} />
        </CardColumn>
        <CardCenter>
          <CardColumn>
            <InputCardNumber
              onValid={onValid}
              onChangeCardType={onChangeCardType}
              currentCard={cardType}
            />
          </CardColumn>

          <CardColumn>
            <InputCardName onValid={onValid} />
          </CardColumn>

          <CardColumn>
            <InputCardDateMonth onValid={onValid} />
            <InputCardDateYear onValid={onValid} />
            <InputCardCSV cardType={cardType} onValid={onValid} />
          </CardColumn>
        </CardCenter>

        <CardColumn>
          <Button type="submit" text="Pay" disabled={!canSubmit} />
        </CardColumn>
      </Card>
    </form>
  );
};

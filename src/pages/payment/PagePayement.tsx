import React, { FunctionComponent, useState } from "react";
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

export const PagePayement: FunctionComponent = () => {
  const [cardType, setCardType] = useState<CardTypes>(CardTypes.unknown);
  const [isSubmitting, setSubmitting] = useState(false);
  const [valid, setValid] = useState(validInputs);

  const onValid = (key: CardFormInputs, isValid: boolean) => {
    setValid((prevValid: any) => ({
      ...prevValid,
      [key]: isValid,
    }));
  };

  console.log("valid: ", valid);

  const onChangeCardType = (card: CardTypes) => {
    console.log({ card });
    setCardType(card);
  };

  const onSubmit = () => {
    console.log("form onSubmit: ", valid);

    if (
      !valid.number ||
      !valid.name ||
      !valid.year ||
      !valid.month ||
      !valid.csv
    ) {
      debugger;

      return false;
    }
    debugger;
    return true;
  };

  const finishSubmit = () => {
    console.log("Finishing submitting!");
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
          <Button type="submit" text="Pay" />
        </CardColumn>
      </Card>
    </form>
  );
};

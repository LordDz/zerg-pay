import { FunctionComponent } from "react";
import { CardTypes } from "@/enums/card/cardTypes";
import { IconMasterCard } from "./paymentCards/iconMasterCard";
import { IconAmericanExpress } from "./paymentCards/iconAmericanExpress";
import { IconVisa } from "./paymentCards/iconVisa";
import { IconDiscover } from "./paymentCards/iconDiscover";
import { IconUnknown } from "./paymentCards/iconUnknown";
import { IconMaestro } from "./paymentCards/iconMaestro";

const renderIcon = (cardType: CardTypes) => {
  switch (cardType) {
    case CardTypes.masterCard:
      return IconMasterCard;
    case CardTypes.americanExpress:
      return IconAmericanExpress;
    case CardTypes.visa:
      return IconVisa;
    case CardTypes.discover:
      return IconDiscover;
    case CardTypes.maestro:
      return IconMaestro;
  }
  return IconUnknown;
};

export const IconPaymentCard: FunctionComponent<{
  cardType: CardTypes;
}> = ({ cardType }) => {
  return renderIcon(cardType);
};

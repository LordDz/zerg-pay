import { FunctionComponent } from "react";
import { CardTypes } from "@/enums/card/cardTypes";
import { IconMasterCard } from "./icons/iconMasterCard";
import { IconAmericanExpress } from "./icons/iconAmericanExpress";
import { IconVisa } from "./icons/iconVisa";
import { IconDiscover } from "./icons/iconDiscover";
import { IconUnknown } from "./icons/iconUnknown";

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
  }
  return IconUnknown;
};

export const Icon: FunctionComponent<{
  cardType: CardTypes;
}> = ({ cardType }) => {
  return renderIcon(cardType);
};

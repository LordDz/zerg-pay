import { CardTypes } from "../../enums/card/cardTypes";

const cardRegex: { [key in CardTypes]: RegExp } = {
  [CardTypes.visa]: /^4[0-9]{12}(?:[0-9]{3})?$/,
  [CardTypes.masterCard]: /^5[1-5][0-9]{14}$/,
  [CardTypes.americanExpress]: /^3[47][0-9]{13}$/,
  [CardTypes.discover]: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  [CardTypes.unknown]: /(?:)/,
};

export const detectCardType = (number: string): CardTypes => {
  for (const cardType of Object.keys(cardRegex) as CardTypes[]) {
    if (cardRegex[cardType].test(number)) {
      return cardType;
    }
  }
  return CardTypes.unknown;
};

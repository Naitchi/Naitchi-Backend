import Card, { Color } from '../type/cardType';

// Give Random Number
export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

// Give Color
export const getRandomColor = (): Color | undefined => {
  const draw: number = getRandomInt(3);
  switch (draw) {
    case 0:
      return Color.RED;
    case 1:
      return Color.YELLOW;
    case 2:
      return Color.BLUE;
    case 3:
      return Color.GREEN;
    default:
      console.log(`Unexpected bug in getRandomColor's switch`);
      break;
  }
};

// Give number and associate Color
export const getRandomCard = (): Card | undefined => {
  const color: Color | undefined = getRandomColor();
  if (!color) return;
  const draw: number = getRandomInt(14);
  return { card: draw, color: color };
};

// Give a full hand
export const getRandomHand = (): Card[] => {
  const hand: Card[] = [];
  for (let i = 0; i < 9; i++) {
    const newCard: Card | undefined = getRandomCard();
    if (newCard) hand.push(newCard);
    else return [];
  }
  return hand;
};

export const getCardUntil = (actualCard: Card): Card[] => {
  const drawnCards: Card[] = [];
  let newCard: Card | undefined;

  do {
    newCard = getRandomCard();
    if (
      newCard &&
      ((newCard.card < 10 && newCard.card !== actualCard.card) ||
        newCard.color !== actualCard.color)
    ) {
      drawnCards.push(newCard);
    } else {
      break;
    }
  } while (true);

  if (newCard) drawnCards.push(newCard);
  return drawnCards;
};

export const drawCards = (cardsNumber: number): Card[] => {
  const drawnCards: Card[] = [];
  for (let i = 0; i < cardsNumber; i++) {
    const newCard: Card | undefined = getRandomCard();
    if (newCard) drawnCards.push(newCard);
    else return [];
  }
  return drawnCards;
};

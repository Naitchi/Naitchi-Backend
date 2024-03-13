// Give Random Number
export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

// Give Color
export const getRandomColor = () => {
  const draw = getRandomInt(3);
  switch (draw) {
    case 0:
      return 'red';
    case 1:
      return 'yellow';
    case 2:
      return 'blue';
    case 3:
      return 'green';
    default:
      console.log(`Unexpected bug in getRandomColor's switch`);
  }
};

// Give number and associate Color
export const getRandomCard = () => {
  const color = getRandomColor();
  const draw = getRandomInt(14);
  return { card: draw, color: color };
};

// Give a full hand
export const getRandomHand = () => {
  const hand = [];
  for (let i = 0; i < 9; i++) {
    hand.push(getRandomCard());
  }
  return hand;
};

export const getCardUntil = (actualCard) => {
  let newCard = getRandomCard();
  while (newCard.card < 10 || ) {}
};

import Card from './cardType';

export default interface Party {
  id: string;
  owner: [Player];
  players: Player[];
  rules: rule[];
  middleCard: Card;
  direction: boolean; // true => clockwise
}

export interface Player {
  ip: string;
  name: string;
  hand: Card[];
  numberOfCards: number;
}

export enum rule {
  LOSER = 'LOSER',
  STACKED = 'STACKED',
  MORE = 'MORE',
  THE_ONLY_COUNTER = 'THE_ONLY_COUNTER',
  JOIN_IN_PROGRESS = 'JOIN_IN_PROGRESS',
}

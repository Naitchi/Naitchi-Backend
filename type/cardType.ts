export default interface Party {
  id: number;
  name: string;
  createdBy: number;
  // rules:;
}

export interface Card {
  card: number;
  color: Color;
}

export enum Color {
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
  YELLOW = 'yellow',
}

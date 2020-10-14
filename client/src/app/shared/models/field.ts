import {Base} from './base';
import {Game} from './game';

export enum FieldValue {
  Empty, Player1, Player2
}

export class Field extends Base {
  gameId: string;
  game?: Game;
  value: FieldValue;
  x: number;
  y: number;
}

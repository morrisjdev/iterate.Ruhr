import {Base} from './base';
import {Field} from './field';

export class Game extends Base {
  key: string;
  fields?: Field[];
  currentPlayer: number;
}

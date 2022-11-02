import { Sprite } from './sprites';
import { Stat } from './stat';
import { Type } from './type';

export class Pokemon {
  name: string;
  sprites: Sprite;
  types: Type[];
  stats: Stat[];
}

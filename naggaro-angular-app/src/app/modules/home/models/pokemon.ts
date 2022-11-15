import { Sprite } from './sprites';
import { Stat } from './stat';
import { Type } from './type';

export class Pokemon {
  id : number;
  name: string;
  sprites: Sprite;
  types: Type[];
  stats: Stat[];
  height: number;
  weight: number;
  catchRate: number;
  genderRatio: number[];
  eggGroups: string[];
  hatchSteps: number;
  abilities : string[];
}

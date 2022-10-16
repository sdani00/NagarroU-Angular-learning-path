import { Sprite } from './sprites';
import { Type } from './type';

export class Pokemon {
  name: string;
  sprites: Sprite;
  types: Type[];

  public getImage(): string {
    return this.sprites?.front_shiny;
  }
}

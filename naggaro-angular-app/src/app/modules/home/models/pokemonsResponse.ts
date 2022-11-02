import { BaseClass } from './baseClass';

export class PokemonsResponse {
  count: number;
  next: string;
  previous: string;
  results: BaseClass[];
}

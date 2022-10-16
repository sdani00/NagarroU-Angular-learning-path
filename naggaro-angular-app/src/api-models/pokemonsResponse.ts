import { PokemonResult } from './pokemonResults';

export class PokemonsResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonResult[];
}

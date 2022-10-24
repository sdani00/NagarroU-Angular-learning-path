import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/api-models/pokemon';
import { PokemonsResponse } from 'src/api-models/pokemonsResponse';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class PokemonsService {
  private baseApi: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient: HttpClient) {}

  getPokemons(url?: string): Promise<PokemonsResponse> {
    if (url != null) {
       return firstValueFrom(this.httpClient.get<PokemonsResponse>(url));
    }

    return firstValueFrom(this.httpClient.get<PokemonsResponse>(this.baseApi));
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(url);
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.baseApi}/${name}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/modules/home/models/pokemon';
import { PokemonsResponse } from 'src/app/modules/home/models/pokemonsResponse';

@Injectable({
  providedIn: 'root',
})

export class PokemonsService {
  private baseApi: string = 'https://pokeapi.co/api/v2/';


  constructor(private httpClient: HttpClient) {}

  public async getPokemons(url?: string): Promise<PokemonsResponse> {
    if (url != null) {
       return (await this.httpClient.get<PokemonsResponse>(url) .toPromise())!;
    }

    return (await this.httpClient.get<PokemonsResponse>(this.baseApi + "pokemon").toPromise())!;
  }

  public getPokemon(url: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(url);
  }

  public getPokemonByName(name: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.baseApi}pokemon/${name}`);
  }

  public getSpeciesById(id : number) : Observable<any> {
    return this.httpClient.get<any>(`${this.baseApi}pokemon-species/${id}`);
  }

  public getEvolutions(id : number) : Observable<any> {
    return this.httpClient.get<any>(`${this.baseApi}evolution-chain/${id}`)
  }
}

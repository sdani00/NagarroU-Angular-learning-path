import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/modules/home/models/pokemon';
import { PokemonsResponse } from 'src/app/modules/home/models/pokemonsResponse';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemon-card-list',
  templateUrl: './pokemon-card-list.component.html',
  styleUrls: ['./pokemon-card-list.component.css'],
})
export class PokemonCardListComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  public pokemonsResponse: PokemonsResponse;
  public pageNumber: number = 1;
  public isLoading: boolean;

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  private loadPokemons(url?: string) {
    this.pokemons = [];

    this.isLoading = true;

    this.pokemonsService.getPokemons(url).then((pokemonsResponse) => {
      this.pokemonsResponse = pokemonsResponse;

      pokemonsResponse.results.forEach((pokemonResult) => {

        this.pokemonsService
          .getPokemon(pokemonResult.url)
          .subscribe((pokemonByUrl) => {
            setTimeout(() => {
              this.isLoading = false;

              let pokemon = new Pokemon();
              pokemon.name = pokemonByUrl.name;
              pokemon.sprites = pokemonByUrl.sprites;
              pokemon.stats = pokemonByUrl.stats;

              this.pokemons.push(pokemon);
            }, 500);
          });
      });
    });
  }

  onPrevClicked() {
    if (!this.pokemonsResponse.previous) {
      return;
    }
    this.pageNumber--;
    this.loadPokemons(this.pokemonsResponse.previous);
  }

  onNextClicked() {
    if (!this.pokemonsResponse.next) {
      return;
    }
    this.pageNumber++;
    this.loadPokemons(this.pokemonsResponse.next);
  }
}

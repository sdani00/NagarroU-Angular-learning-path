import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { min } from 'rxjs';
import { Pokemon } from '../../models/pokemon';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemon-evolution',
  templateUrl: './pokemon-evolution.component.html',
  styleUrls: ['./pokemon-evolution.component.css'],
})
export class PokemonEvolutionComponent implements OnInit, OnChanges {
  @Input()
  pokemon: Pokemon;

  constructor(private pokemonService: PokemonsService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon'] && this.pokemon) {
    this.getEvolution();
    }
  }

  minLevel: number;
  evolvesTo: string;
  imageUrl:string;

  ngOnInit(): void {}

  getEvolution() {
    this.pokemonService
      .getEvolutions(this.pokemon.id)
      .subscribe((evolutionResponse) => {
        console.log(this.pokemon.id);
        this.minLevel =
          evolutionResponse.chain.evolves_to[0].evolution_details[0].min_level;
          console.log(this.minLevel);
        this.evolvesTo = evolutionResponse.chain.evolves_to[0].species.name;
        console.log(this.evolvesTo);
        console.log( evolutionResponse.chain.evolves_to[0]);

        this.pokemonService.getPokemonByName(this.evolvesTo).subscribe((pokemon) => {
          this.imageUrl = pokemon.sprites.front_shiny;
          console.log(pokemon);
        })
      });
  }
}



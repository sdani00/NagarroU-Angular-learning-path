import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/modules/home/models/pokemon';
import { BaseClass } from '../../models/baseClass';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  public pokemon : Pokemon;
  public imageUrl: string;
  constructor(private activatedRoute : ActivatedRoute, private pokemonService: PokemonsService) { }

  ngOnInit(): void {
    let pokemonName = this.activatedRoute.snapshot.params['name'];
    this.pokemonService.getPokemonByName(pokemonName).subscribe((pokemon) =>{
      this.pokemon = new Pokemon();
      this.pokemon.id = pokemon.id;
      this.pokemon.name = pokemon.name;
      this.pokemon.sprites = pokemon.sprites;
      this.pokemon.types = pokemon.types;
      this.pokemon.stats = pokemon.stats;
      this.pokemon.height = pokemon.height;
      this.pokemon.weight = pokemon.weight;
      this.pokemon.abilities = pokemon.abilities.map((x : any) => x.ability.name)

      this.pokemonService.getSpeciesById(pokemon.id).subscribe((speciesResponse) => {
        this.pokemon.catchRate = speciesResponse.capture_rate;
        this.pokemon.eggGroups = speciesResponse.egg_groups.map((x : BaseClass) => x.name);
        this.pokemon.hatchSteps = speciesResponse.hatch_counter;
      })
    });
  }

}

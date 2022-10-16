import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/api-models/pokemon';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  public pokemon : Pokemon;
  public imageUrl:string;
  constructor(private activatedRoute : ActivatedRoute, private pokemonService: PokemonsService) { }

  ngOnInit(): void {
    let pokemonName = this.activatedRoute.snapshot.params['name'];
    this.pokemonService.getPokemonByName(pokemonName).subscribe((pokemon) =>{
      this.pokemon = new Pokemon();
      this.pokemon.name = pokemon.name;
      this.pokemon.sprites = pokemon.sprites;
      this.pokemon.types = pokemon.types;
      this.imageUrl = this.pokemon.getImage();
      console.log(this.pokemon.types);
    });
  }

}

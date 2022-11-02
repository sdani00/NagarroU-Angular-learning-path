import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.css'],
})
export class PokemonProfileComponent implements OnInit {
  constructor() {}

  @Input()
  pokemon: Pokemon;

  ngOnInit(): void {}
}

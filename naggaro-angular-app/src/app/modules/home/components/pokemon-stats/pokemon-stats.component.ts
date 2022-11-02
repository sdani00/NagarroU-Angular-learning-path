import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/modules/home/models/pokemon';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.css']
})
export class PokemonStatsComponent implements OnInit {

  constructor() { }

  @Input()
  pokemon : Pokemon;

  ngOnInit(): void {
  }


}

import { Component, OnInit } from '@angular/core';
import { PokemonsService } from './services/pokemons.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserService, private pokemonsService : PokemonsService) { }

  ngOnInit(): void {
  }
}

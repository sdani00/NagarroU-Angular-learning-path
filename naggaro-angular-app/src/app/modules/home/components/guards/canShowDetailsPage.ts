import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { PokemonsService } from '../../services/pokemons.service';

@Injectable()
export class CanShowDetailsPage implements CanActivate {
  constructor(private pokemonService: PokemonsService) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean{
    let pokemonName = route.params['name'];

    if(!pokemonName) {
      return false;
    }

    return this.pokemonService.getPokemonByName(pokemonName).pipe(map(x => !!x));
  }
}

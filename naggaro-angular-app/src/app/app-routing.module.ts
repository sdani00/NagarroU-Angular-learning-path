import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './modules/home/components/pokemon-details/pokemon-details.component';
import { HomeComponent } from './modules/home/home.component';
import { PokemonFormComponent } from './modules/products/pokemon-form/pokemon-form.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"pokemon/:name",
    component:PokemonDetailsComponent
  },
  {
    path:"create-product",
    component: PokemonFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

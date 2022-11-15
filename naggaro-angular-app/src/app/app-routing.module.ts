import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanShowDetailsPage } from './modules/home/components/guards/canShowDetailsPage';
import { PokemonDetailsComponent } from './modules/home/components/pokemon-details/pokemon-details.component';
import { HomeComponent } from './modules/home/home.component';
import { CanActivateProductList } from './modules/products/guards/canActivateProductList';
import { PokemonFormComponent } from './modules/products/pokemon-form/pokemon-form.component';
import { ProductListComponent } from './modules/products/product-list/product-list.component';

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
    component:PokemonDetailsComponent,
    canActivate: [CanShowDetailsPage]
  },
  {
    path:"create-product",
    component: PokemonFormComponent
  },
  {
    path:"product-list",
    component: ProductListComponent,
    canActivate: [CanActivateProductList]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

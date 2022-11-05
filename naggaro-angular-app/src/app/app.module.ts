import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './modules/home/home.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardListComponent } from './modules/home/components/pokemon-card-list/pokemon-card-list.component';
import { PokemonCardComponent } from './modules/home/components/pokemon-card/pokemon-card.component';
import {MatCardModule} from '@angular/material/card';
import { PokemonDetailsComponent } from './modules/home/components/pokemon-details/pokemon-details.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PokemonSearchComponent } from './modules/home/components/pokemon-search/pokemon-search.component';
import {MatInputModule} from '@angular/material/input';
import { PokemonStatsComponent } from './modules/home/components/pokemon-stats/pokemon-stats.component';
import { PokemonProfileComponent } from './modules/home/components/pokemon-profile/pokemon-profile.component';
import { PokemonEvolutionComponent } from './modules/home/components/pokemon-evolution/pokemon-evolution.component';
import { PokemonDamageComponent } from './modules/home/components/pokemon-damage/pokemon-damage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PokemonCardListComponent,
    PokemonCardComponent,
    PokemonDetailsComponent,
    PokemonSearchComponent,
    PokemonStatsComponent,
    PokemonProfileComponent,
    PokemonEvolutionComponent,
    PokemonDamageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './main/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './main/characters-list/character-details/character-details.component';
import { FilmsListComponent } from './main/films-list/films-list.component'
import { FilmDetailsComponent } from './main/films-list/film-details/film-details.component'
import { PlanetsListComponent } from './main/planets-list/planets-list.component'
import { PlanetDetailsComponent } from './main/planets-list/planet-details/planet-details.component';
import { SpeciesListComponent } from './main/species-list/species-list.component';
import { SpeciesDetailsComponent } from './main/species-list/species-details/species-details.component';
import { StarshipsListComponent } from './main/starships-list/starships-list.component';
import { StarshipDetailsComponent } from './main/starships-list/starship-details/starship-details.component';
import { VehiclesListComponent } from './main/vehicles-list/vehicles-list.component';
import { VehicleDetailsComponent } from './main/vehicles-list/vehicle-details/vehicle-details.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'characters-list', component: CharactersListComponent },
  { path: 'character-details/:id', component: CharacterDetailsComponent },
  { path: 'films-list', component: FilmsListComponent },
  { path: 'film-details/:id', component: FilmDetailsComponent },
  { path: 'planets-list', component: PlanetsListComponent },
  { path: 'planet-details/:id', component: PlanetDetailsComponent },
  { path: 'species-list', component: SpeciesListComponent },
  { path: 'species-details/:id', component: SpeciesDetailsComponent },
  { path: 'starships-list', component: StarshipsListComponent },
  { path: 'starship-details/:id', component: StarshipDetailsComponent },
  { path: 'vehicles-list', component: VehiclesListComponent },
  { path: 'vehicle-details/:id', component: VehicleDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

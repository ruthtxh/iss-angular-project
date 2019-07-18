import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentsService } from './comments.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MatButtonModule } from '@angular/material/button';
import { CharactersListComponent } from './main/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './main/characters-list/character-details/character-details.component';
import { FilmsListComponent } from './main/films-list/films-list.component';
import { SpeciesListComponent } from './main/species-list/species-list.component';
import { StarshipsListComponent } from './main/starships-list/starships-list.component';
import { VehiclesListComponent } from './main/vehicles-list/vehicles-list.component';
import { PlanetsListComponent } from './main/planets-list/planets-list.component';
import { FilmDetailsComponent } from './main/films-list/film-details/film-details.component';
import { PlanetDetailsComponent } from './main/planets-list/planet-details/planet-details.component';
import { SpeciesDetailsComponent } from './main/species-list/species-details/species-details.component';
import { StarshipDetailsComponent } from './main/starships-list/starship-details/starship-details.component';
import { VehicleDetailsComponent } from './main/vehicles-list/vehicle-details/vehicle-details.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CharactersListComponent,
    CharacterDetailsComponent,
    FilmsListComponent,
    SpeciesListComponent,
    StarshipsListComponent,
    VehiclesListComponent,
    PlanetsListComponent,
    FilmDetailsComponent,
    PlanetDetailsComponent,
    SpeciesDetailsComponent,
    StarshipDetailsComponent,
    VehicleDetailsComponent,
    HeaderComponent,
    CommentsComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [Title, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

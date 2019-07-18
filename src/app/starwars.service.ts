import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Character } from './character';
import { Film } from './film';
import { Planet } from './planet';
import { Species } from './species';
import { Starship } from './starship';
import { Vehicle } from './vehicle';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  apiURL = 'https://swapi.co/api';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character> {
    return this.http.get<Character>(this.apiURL + '/people/')
      .pipe(map(data => {
        return data['results'];
      }));
  }
  getCharacter(id): Observable<Character> {
    return this.http.get<Character>(this.apiURL + '/people/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getFilms(): Observable<Film> {
    return this.http.get<Film>(this.apiURL + '/films/')
      .pipe(map(data => {
        return data['results'];
      }));
  }
  getFilm(id): Observable<Film> {
    return this.http.get<Film>(this.apiURL + '/films/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getPlanets(): Observable<Planet> {
    return this.http.get<Planet>(this.apiURL + '/planets/')
      .pipe(map(data => {
        return data['results'];
      }));
  }
  getPlanet(id): Observable<Planet> {
    return this.http.get<Planet>(this.apiURL + '/planets/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getSpecies(): Observable<Species> {
    return this.http.get<Species>(this.apiURL + '/species/')
      .pipe(map(data => {
        return data['results'];
      }));
  }
  getSpecie(id): Observable<Species> {
    return this.http.get<Species>(this.apiURL + '/species/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getStarships(): Observable<Starship> {
    return this.http.get<Starship>(this.apiURL + '/starships/')
      .pipe(map(data => {
        return data['results'];
      }));
  }
  getStarship(id): Observable<Starship> {
    return this.http.get<Starship>(this.apiURL + '/starships/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getVehicles(): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.apiURL + '/vehicles/')
      .pipe(map(data => {
        return data['results'];
      }));
  }
  getVehicle(id): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.apiURL + '/vehicles/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}

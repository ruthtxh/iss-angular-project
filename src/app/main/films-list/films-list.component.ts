import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../starwars.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  Film: any = [];
  constructor(private titleService: Title, private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.loadFilms();
    this.titleService.setTitle("Films List");
  }
  loadFilms() {
    return this.starwarsService.getFilms().subscribe((data) => {
      this.Film = data;
      console.log(data);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../starwars.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  Planet: any = [];
  constructor(private titleService: Title, private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.loadPlanets();
    this.titleService.setTitle("Planets List");
  }
  loadPlanets() {
    return this.starwarsService.getPlanets().subscribe((data) => {
      this.Planet = data;
      console.log(data);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../starwars.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {

  Species: any = [];
  constructor(private titleService: Title, private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.loadSpecies();
    this.titleService.setTitle("Species List");
  }
  loadSpecies() {
    return this.starwarsService.getSpecies().subscribe((data) => {
      this.Species = data;
      console.log(data);
    })
  }
}

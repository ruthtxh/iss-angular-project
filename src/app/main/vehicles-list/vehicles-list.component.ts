import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../starwars.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  Vehicle: any = [];
  constructor(private titleService: Title, private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.loadVehicles();
    this.titleService.setTitle("Vehicles List");
  }
  loadVehicles() {
    return this.starwarsService.getVehicles().subscribe((data) => {
      this.Vehicle = data;
      console.log(data);
    })
  }

}

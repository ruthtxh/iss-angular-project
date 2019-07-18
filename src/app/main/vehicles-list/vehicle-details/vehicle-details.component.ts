import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../../starwars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommentsService } from '../../../comments.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  id = Number(this.activatedRoute.snapshot.params['id']) + 1;
  item = 'Vehicle' + this.id;
  vehicleData: any = {};
  constructor(private titleService: Title, private starwarsService: StarwarsService,
    public activatedRoute: ActivatedRoute,
    public router: Router, public commentsService: CommentsService) { }

  ngOnInit() {
    this.starwarsService.getVehicle(this.id).subscribe((data: {}) => {
      this.vehicleData = data;
    });
    this.titleService.setTitle("Vehicle Details");
    this.setComment();
  }
  setComment() {
    this.commentsService.item = this.item;
  }
}

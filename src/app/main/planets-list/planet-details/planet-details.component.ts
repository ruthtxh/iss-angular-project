import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../../starwars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommentsService } from '../../../comments.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {

  id = Number(this.activatedRoute.snapshot.params['id'])+1;
  item = 'Planet' + this.id;
  planetData: any = {};
  constructor(private titleService: Title, private starwarsService: StarwarsService,
    public activatedRoute: ActivatedRoute,
    public router: Router, public commentsService: CommentsService) { }

  ngOnInit() {
    this.starwarsService.getPlanet(this.id).subscribe((data: {}) => {
      this.planetData = data;
    });
    this.titleService.setTitle("Planet Details");
    this.setComment();
  }
  setComment() {
    this.commentsService.item = this.item;
  }
}

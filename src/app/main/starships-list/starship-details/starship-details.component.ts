import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../../starwars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommentsService } from '../../../comments.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit {

  id = Number(this.activatedRoute.snapshot.params['id']) + 1;
  item = 'Starship' + this.id;
  starshipData: any = {};
  constructor(private titleService: Title, private starwarsService: StarwarsService,
    public activatedRoute: ActivatedRoute,
    public router: Router, public commentsService: CommentsService) { }

  ngOnInit() {
    this.starwarsService.getStarship(this.id).subscribe((data: {}) => {
      this.starshipData = data;
    });
    this.titleService.setTitle("Starship Details");
    this.setComment();
  }
  setComment() {
    this.commentsService.item = this.item;
  }
}

import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../../starwars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommentsService } from '../../../comments.service';


@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.css']
})
export class SpeciesDetailsComponent implements OnInit {

  id = Number(this.activatedRoute.snapshot.params['id']) + 1;
  item = 'Species' + this.id;
  speciesData: any = {};
  constructor(private titleService: Title, private starwarsService: StarwarsService,
    public activatedRoute: ActivatedRoute,
    public router: Router, public commentsService: CommentsService) { }

  ngOnInit() {
    this.starwarsService.getSpecie(this.id).subscribe((data: {}) => {
      this.speciesData = data;
    });
    this.titleService.setTitle("Species Details");
    this.setComment();
  }
  setComment() {
    this.commentsService.item = this.item;
  }
}

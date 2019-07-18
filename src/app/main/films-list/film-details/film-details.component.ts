import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../../starwars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommentsService } from '../../../comments.service';
@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {


  id = Number(this.activatedRoute.snapshot.params['id']) + 1;
  item = 'Film' + this.id;
  filmData: any = {};
  constructor(private titleService: Title, private starwarsService: StarwarsService,
    public activatedRoute: ActivatedRoute,
    public router: Router, public commentsService: CommentsService) { }

  ngOnInit() {
    this.starwarsService.getFilm(this.id).subscribe((data: {}) => {
      this.filmData = data;
    });
    this.titleService.setTitle("Film Details");
    this.setComment();
  }
  setComment() {
    this.commentsService.item = this.item;
  }
}

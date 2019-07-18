import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../../starwars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommentsService } from '../../../comments.service';
@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  id = Number(this.activatedRoute.snapshot.params['id']) + 1;
  item = 'Character' + this.id;
  characterData: any = {};
  constructor(private titleService: Title,
    private starwarsService: StarwarsService,
    public activatedRoute: ActivatedRoute,
    public router: Router, public commentsService: CommentsService) { }

  ngOnInit() {
    this.starwarsService.getCharacter(this.id).subscribe((data: {}) => {
      this.characterData = data;
    });
    this.titleService.setTitle("Character Details");
    this.setComment();
  }
  setComment() {
    this.commentsService.item = this.item;
  }
}

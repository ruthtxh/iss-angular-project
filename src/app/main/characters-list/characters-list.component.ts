import { Component, OnInit, Input } from '@angular/core';
import { StarwarsService } from '../../starwars.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  Character: any = [];
  constructor(private starwarsService: StarwarsService, private titleService: Title) { }

  ngOnInit() {
    this.loadCharacters();
    this.titleService.setTitle("Characters List");
  }
  loadCharacters() {
    return this.starwarsService.getCharacters().subscribe((data) => {
      this.Character = data;
      console.log(data);
    })
  }
}

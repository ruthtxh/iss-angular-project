import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../starwars.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  Starship: any = [];
  constructor(private titleService: Title, private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.loadStarships();
    this.titleService.setTitle("Starships List");
  }
  loadStarships() {
    return this.starwarsService.getStarships().subscribe((data) => {
      this.Starship = data;
      console.log(data);
    })
  }

}

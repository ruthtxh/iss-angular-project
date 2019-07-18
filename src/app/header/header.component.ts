import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private titleService: Title, private location: Location) { }
  ngOnInit() {
    this.titleService.setTitle("");
  }
  goBack() {
    this.location.back();
  }
}

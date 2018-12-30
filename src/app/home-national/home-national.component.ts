import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-national',
  templateUrl: './home-national.component.html',
  styleUrls: ['./home-national.component.css']
})
export class HomeNationalComponent implements OnInit {
  nationalList1 = [
    {
      icon: 'fas fa-2x fa-flag-usa',
      header: 'National Task Force',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: 'fas fa-2x fa-arrow-right',
      header: 'The Directive',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];
  nationalList2 = [
    {
      icon: 'fas fa-2x fa-handshake',
      header: 'Engagement Levels',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: 'fas fa-2x fa-globe',
      header: 'Game Changer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

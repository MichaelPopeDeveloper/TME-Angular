import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-advocates',
  templateUrl: './home-advocates.component.html',
  styleUrls: ['./home-advocates.component.css']
})
export class HomeAdvocatesComponent implements OnInit {
  advocatesList = [
    {
      icon: 'fas fa-2x fa-handshake',
      header: 'Advocates',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: 'fas fa-2x fa-handshake',
      header: 'New Leadership',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: 'fas fa-2x fa-handshake',
      header: 'Economic Army',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers:[ CinemaService ]
})
export class MyHomeComponent implements OnInit {

  allMovies = [];

  constructor(public cinema: CinemaService) { }

  ngOnInit() {
    // Fill this component array property with the return from cinema service
    this.allMovies = this.cinema.getMovies();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  loading = true;
  movieList = null;

  constructor(private cinemaService: CinemaService, private router: Router) {}

  ngOnInit() {
    this.movieList = this.cinemaService.getMovies();
  }
}

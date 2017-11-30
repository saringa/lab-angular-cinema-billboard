import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from 'app/services/cinema.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movieList = null;
  movieId: number;
  constructor(
    private route: ActivatedRoute,
    private cinemaService: CinemaService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => (this.movieId = Number(params['id']))
    );
    this.movieList = this.cinemaService.getMovie(this.movieId);
  }
}

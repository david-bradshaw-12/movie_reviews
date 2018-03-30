import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {
	all_movies = [];

  constructor(
  	private _movieService: MovieService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
  	this.showAllMovies();
  }

showAllMovies(){
	let observable = this._movieService.showAllMovies();
	observable.subscribe( (data) =>{
		// console.log(data);
		 this.all_movies = data.json().data;
	})
}
goHome() {
    this._router.navigate(['/movies']);

}
}


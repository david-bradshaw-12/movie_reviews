import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
	newMovie = {
		title: String,
		review: {}
	};
	newReview = {
		name: '',
		stars: 0,
		review: ''
	};
	error: String;

  constructor(
  	private _movieService: MovieService,
    private _router: Router,
    private _route: ActivatedRoute
  	) { }

  ngOnInit() {
  }
addMovieAndReview($event){
	$event.preventDefault();
	this.newMovie = {
		title: this.newMovie.title,
		review: this.newReview
	};
	console.log(this.newMovie);
	let observable = this._movieService.addNewMovieAndReview(this.newMovie);
	observable.subscribe( (data) =>{
		console.log(data);
		// console.log(data.error);
			this.newMovie = {
				title: ''
			};
			this.newReview = {
					name: '',
					stars: 0,
					review: ''
			};
		//redirect back to home.
		this.goHome();
	});
}

goHome() {
    this._router.navigate(['/movies']);
}

}

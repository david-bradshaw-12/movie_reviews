import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-see-reviews',
  templateUrl: './see-reviews.component.html',
  styleUrls: ['./see-reviews.component.css']
})
export class SeeReviewsComponent implements OnInit {
  title = '';
  reviews = [];
  currentMovie = {};

  constructor(
  	private _movieService: MovieService,
    private _router: Router,
    private _route: ActivatedRoute
  	) { }

  ngOnInit() {
    this.getOneMovie();
    this.getReviews();
  }
goHome() {
    this._router.navigate(['/movies']);
}
deleteMovie($event){
  this._route.params.subscribe((params: Params) => {
    let observable = this._movieService.deleteMovie(params['id']);
    observable.subscribe( (res) =>{
      console.log(res);
      this.goHome();
    })
})
}
getOneMovie(){
  this._route.params.subscribe((params: Params) => {
  // console.log(params['id']);
    let observable = this._movieService.getOneMovie(params['id']);
  observable.subscribe( (data) => {
    console.log(observable);
    this.currentMovie = data.json().data;
    this.title = this.currentMovie.title
      });
  });
};
getReviews(){
  this._route.params.subscribe((params: Params) => {
    let observable = this._movieService.getReviews(params['id']);
    observable.subscribe( (data) => {
      console.log(data);
      this.reviews = data.json().data;
    })
})

}
deleteReview($event, reviewID){
    let observable = this._movieService.deleteReview(reviewID);
    observable.subscribe( (res) =>{
      console.log(res);
      this.getReviews();
    })
};






}
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  currentMovie = {};
  currentReview = {};
  errors = ''

  constructor(
  	private _movieService: MovieService,
    private _router: Router,
    private _route: ActivatedRoute
  	) { }

  ngOnInit() {
    this.getOneMovie()
  }
  goReviews(id) {
    this._router.navigate(['/movie/'+id]);
}


getOneMovie(){
  this._route.params.subscribe((params: Params) => {
  console.log(params['id']);
    let observable = this._movieService.getOneMovie(params['id']);
  observable.subscribe( (data) => {
    console.log(observable);
    this.currentMovie = data.json().data;
      });
  });
};
addReview($event){
    $event.preventDefault();
    let movie_id = this.currentMovie._id
      console.log('addreview is running in component.')
      let observable = this._movieService.addNewReview(this.currentReview, this.currentMovie._id);
      observable.subscribe( (err) =>{
        console.log(err);
        this.errors = err;
      this.currentReview = {
        name: '',
      quantity: 0,
      price: 0
        };
      this.goReviews(movie_id);
      });
    
  }


}

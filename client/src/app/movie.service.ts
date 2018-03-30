import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

@Injectable()
export class MovieService {

  constructor(private _http: Http) { }

  addNewMovieAndReview(newMovie){
  	return this._http.post('/movies/add', newMovie)
  }
  showAllMovies(){
  	return this._http.get('/seemovies')
  }
  getOneMovie(id){
  	return this._http.get('/movie/one/'+id)
  }
  addNewReview(review, id){
  	console.log("addReview in service ran.")
  	return this._http.post('/movies/addreview/'+id, review )
  }
  deleteMovie(id){
  	console.log('delete ran on service')
  	return this._http.delete('/movie/delete/'+id)
  }
  getReviews(id){
  	return this._http.get('/movie/reviews/' +id)
  }
  deleteReview(reviewID){
  	return this._http.delete('/movies/reviews/delete/'+reviewID)
  }

}


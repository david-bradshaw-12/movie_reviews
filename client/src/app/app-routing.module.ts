import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowMoviesComponent }  from './movies/show-movies/show-movies.component';
import { NewReviewComponent }   from './movies/new-review/new-review.component';
import { SeeReviewsComponent }  from './movies/see-reviews/see-reviews.component';
import { AddMovieComponent }  from './movies/add-movie/add-movie.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: ShowMoviesComponent },
  	{ path: 'movies',          component: ShowMoviesComponent },
  	{ path: 'movies/review/:id',  component: NewReviewComponent },
  	{ path: 'movies/new',    component: AddMovieComponent },
  	{ path: 'movie/:id',      component: SeeReviewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



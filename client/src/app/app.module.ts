import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { MovieService } from './movie.service'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowMoviesComponent } from './movies/show-movies/show-movies.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { NewReviewComponent } from './movies/new-review/new-review.component';
import { SeeReviewsComponent } from './movies/see-reviews/see-reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ShowMoviesComponent,
    AddMovieComponent,
    NewReviewComponent,
    SeeReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }





webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var show_movies_component_1 = __webpack_require__("./src/app/movies/show-movies/show-movies.component.ts");
var new_review_component_1 = __webpack_require__("./src/app/movies/new-review/new-review.component.ts");
var see_reviews_component_1 = __webpack_require__("./src/app/movies/see-reviews/see-reviews.component.ts");
var add_movie_component_1 = __webpack_require__("./src/app/movies/add-movie/add-movie.component.ts");
var routes = [
    { path: '', pathMatch: 'full', component: show_movies_component_1.ShowMoviesComponent },
    { path: 'movies', component: show_movies_component_1.ShowMoviesComponent },
    { path: 'movies/review/:id', component: new_review_component_1.NewReviewComponent },
    { path: 'movies/new', component: add_movie_component_1.AddMovieComponent },
    { path: 'movie/:id', component: see_reviews_component_1.SeeReviewsComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n   {{ title }}\n  </h1>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Squishy Tomatoes';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var movie_service_1 = __webpack_require__("./src/app/movie.service.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var movies_component_1 = __webpack_require__("./src/app/movies/movies.component.ts");
var show_movies_component_1 = __webpack_require__("./src/app/movies/show-movies/show-movies.component.ts");
var add_movie_component_1 = __webpack_require__("./src/app/movies/add-movie/add-movie.component.ts");
var new_review_component_1 = __webpack_require__("./src/app/movies/new-review/new-review.component.ts");
var see_reviews_component_1 = __webpack_require__("./src/app/movies/see-reviews/see-reviews.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                movies_component_1.MoviesComponent,
                show_movies_component_1.ShowMoviesComponent,
                add_movie_component_1.AddMovieComponent,
                new_review_component_1.NewReviewComponent,
                see_reviews_component_1.SeeReviewsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                forms_1.FormsModule
            ],
            providers: [movie_service_1.MovieService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/movie.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var MovieService = /** @class */ (function () {
    function MovieService(_http) {
        this._http = _http;
    }
    MovieService.prototype.addNewMovieAndReview = function (newMovie) {
        return this._http.post('/movies/add', newMovie);
    };
    MovieService.prototype.showAllMovies = function () {
        return this._http.get('/seemovies');
    };
    MovieService.prototype.getOneMovie = function (id) {
        return this._http.get('/movie/one/' + id);
    };
    MovieService.prototype.addNewReview = function (review, id) {
        console.log("addReview in service ran.");
        return this._http.post('/movies/addreview/' + id, review);
    };
    MovieService.prototype.deleteMovie = function (id) {
        console.log('delete ran on service');
        return this._http.delete('/movie/delete/' + id);
    };
    MovieService.prototype.getReviews = function (id) {
        return this._http.get('/movie/reviews/' + id);
    };
    MovieService.prototype.deleteReview = function (reviewID) {
        return this._http.delete('/movies/reviews/delete/' + reviewID);
    };
    MovieService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;


/***/ }),

/***/ "./src/app/movies/add-movie/add-movie.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n\tfont-family: arial;\r\n\tfont-size: 20pt;\r\n}\r\n#red{\r\n\tcolor: red;\r\n}"

/***/ }),

/***/ "./src/app/movies/add-movie/add-movie.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<form (submit)=\"addMovieAndReview($event)\" #form=\"ngForm\" >\n  \t<ul>\n  \t\t<li id=\"red\"><small *ngIf=\"!form.valid && form.touched\">All fields are required.</small></li>\n  \t\t<li id=\"red\"><small *ngIf=\"!title.valid && title.touched\">Name needs 3 characters.</small></li>\n\t  \t<li><label>Movie title:</label>\n\t  \t<input\n\t  \t\tname=\"newMovie.title\"\n\t  \t\ttype=\"text\"\n\t  \t\trequired\n\t  \t\tminlength=\"3\"\n\t  \t\t[(ngModel)]=\"newMovie.title\"\n\t  \t\t#title=\"ngModel\"\n\t  \t></li>\n\t  \t<li><small id=\"red\" *ngIf=\"!username.valid\">Name is required.</small></li>\n\t  \t<li><label>Your name:</label>\n\t  \t<input\n\t  \t\tname=\"newReview.name\"\n\t  \t\ttype=\"text\"\n\t  \t\trequired\n\t  \t\tminlength=\"3\"\n\t  \t\t[(ngModel)]=\"newReview.name\"\n\t  \t\t#username=\"ngModel\"\n\t  \t></li>\n\t  \t<li><small id=\"red\" *ngIf=\"!stars.valid\">Stars is required.</small></li>\n\t  \t<li><label>Stars:</label>\n\t  \t<select\n\t  \t\tname=\"newReview.stars\"\n\t  \t\ttype=\"number\"\n\t  \t\t[(ngModel)]=\"newReview.stars\"\n\t  \t\trequired\n\t  \t\t#stars=\"ngModel\"\n\t  \t>\n\t  \t\t<option [value]=\"1\">1</option>\n\t  \t\t<option [value]=\"2\">2</option>\n\t  \t\t<option [value]=\"3\">3</option>\n\t  \t\t<option [value]=\"4\">4</option>\n\t  \t\t<option [value]=\"5\">5</option>\n\t  \t</select></li>\n\t  \t<li><small id=\"red\" *ngIf=\"!review.valid\">Review is required.</small></li>\n\t  \t<li><textarea\n\t  \t\t\tname=\"newReview.review\"\n\t  \t\t\trequired\n\t  \t\t\tminlength=\"3\"\n\t  \t\t\t[(ngModel)]=\"newReview.review\"\n\t  \t\t\t#review=\"ngModel\"\n\t  \t\t></textarea></li>\n\t  \t<li><input type=\"submit\" value=\"add movie and review\" [disabled]=\"!form.valid\"></li>\n\t  </ul>\n  </form>"

/***/ }),

/***/ "./src/app/movies/add-movie/add-movie.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var movie_service_1 = __webpack_require__("./src/app/movie.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AddMovieComponent = /** @class */ (function () {
    function AddMovieComponent(_movieService, _router, _route) {
        this._movieService = _movieService;
        this._router = _router;
        this._route = _route;
        this.newMovie = {
            title: String,
            review: {}
        };
        this.newReview = {
            name: '',
            stars: 0,
            review: ''
        };
    }
    AddMovieComponent.prototype.ngOnInit = function () {
    };
    AddMovieComponent.prototype.addMovieAndReview = function ($event) {
        var _this = this;
        $event.preventDefault();
        this.newMovie = {
            title: this.newMovie.title,
            review: this.newReview
        };
        console.log(this.newMovie);
        var observable = this._movieService.addNewMovieAndReview(this.newMovie);
        observable.subscribe(function (data) {
            console.log(data);
            // console.log(data.error);
            _this.newMovie = {
                title: ''
            };
            _this.newReview = {
                name: '',
                stars: 0,
                review: ''
            };
            //redirect back to home.
            _this.goHome();
        });
    };
    AddMovieComponent.prototype.goHome = function () {
        this._router.navigate(['/movies']);
    };
    AddMovieComponent = __decorate([
        core_1.Component({
            selector: 'app-add-movie',
            template: __webpack_require__("./src/app/movies/add-movie/add-movie.component.html"),
            styles: [__webpack_require__("./src/app/movies/add-movie/add-movie.component.css")]
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], AddMovieComponent);
    return AddMovieComponent;
}());
exports.AddMovieComponent = AddMovieComponent;


/***/ }),

/***/ "./src/app/movies/movies.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  movies works!\n</p>\n"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MoviesComponent = /** @class */ (function () {
    function MoviesComponent() {
    }
    MoviesComponent.prototype.ngOnInit = function () {
    };
    MoviesComponent = __decorate([
        core_1.Component({
            selector: 'app-movies',
            template: __webpack_require__("./src/app/movies/movies.component.html"),
            styles: [__webpack_require__("./src/app/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MoviesComponent);
    return MoviesComponent;
}());
exports.MoviesComponent = MoviesComponent;


/***/ }),

/***/ "./src/app/movies/new-review/new-review.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n\tfont-family: arial;\r\n\tfont-size: 20pt;\r\n}\r\n#red{\r\n\tcolor: red;\r\n}"

/***/ }),

/***/ "./src/app/movies/new-review/new-review.component.html":
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/movies']\">See all Movies</button>\n\n\n<div>\n\t<h2>Review for {{currentMovie.title}}</h2>\n\t<h5 id=\"red\">{{error}}</h5>\n\t<form (submit)=\"addReview($event)\" #form=\"ngForm\">\n  \t<ul>\n  \t\t<li id=\"red\"><small *ngIf=\"!form.valid && form.touched\">All fields are required.</small></li>\n\t  \t<li><small id=\"red\" *ngIf=\"!username.valid\">Name is required.</small></li>\n\t  \t<li><label>Your name:</label>\n\t  \t<input\n\t  \t\tname=\"currentReview.name\"\n\t  \t\ttype=\"text\"\n\t  \t\trequired\n\t  \t\tminlength=\"3\"\n\t  \t\t[(ngModel)]=\"currentReview.name\"\n\t  \t\t#username=\"ngModel\"\n\t  \t></li>\n\t  \t<li><small id=\"red\" *ngIf=\"!stars.valid\">Stars is required.</small></li>\n\t  \t<li><label>Stars:</label>\n\t  \t<select\n\t  \t\tname=\"currentReview.stars\"\n\t  \t\ttype=\"number\"\n\t  \t\t[(ngModel)]=\"currentReview.stars\"\n\t  \t\trequired\n\t  \t\t#stars=\"ngModel\"\n\t  \t>\n\t  \t\t<option [value]=\"1\">1</option>\n\t  \t\t<option [value]=\"2\">2</option>\n\t  \t\t<option [value]=\"3\">3</option>\n\t  \t\t<option [value]=\"4\">4</option>\n\t  \t\t<option [value]=\"5\">5</option>\n\t  \t</select>\n\t  \t</li>\n\t  \t<li><small id=\"red\" *ngIf=\"!review.valid\">Review is required.</small></li>\n\t  \t<li><textarea\n\t  \t\t\tname=\"currentReview.review\"\n\t  \t\t\trequired\n\t  \t\t\tminlength=\"3\"\n\t  \t\t\t[(ngModel)]=\"currentReview.review\"\n\t  \t\t\t#review=\"ngModel\"\n\t  \t\t></textarea></li>\n\t  \t<li><input type=\"submit\" value=\"review\" [disabled]=\"!form.valid\"></li>\n\t  </ul>\n  </form>\n\t\n</div>"

/***/ }),

/***/ "./src/app/movies/new-review/new-review.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var movie_service_1 = __webpack_require__("./src/app/movie.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var NewReviewComponent = /** @class */ (function () {
    function NewReviewComponent(_movieService, _router, _route) {
        this._movieService = _movieService;
        this._router = _router;
        this._route = _route;
        this.currentMovie = {};
        this.currentReview = {};
        this.errors = '';
    }
    NewReviewComponent.prototype.ngOnInit = function () {
        this.getOneMovie();
    };
    NewReviewComponent.prototype.goReviews = function (id) {
        this._router.navigate(['/movie/' + id]);
    };
    NewReviewComponent.prototype.getOneMovie = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            var observable = _this._movieService.getOneMovie(params['id']);
            observable.subscribe(function (data) {
                console.log(observable);
                _this.currentMovie = data.json().data;
            });
        });
    };
    ;
    NewReviewComponent.prototype.addReview = function ($event) {
        var _this = this;
        $event.preventDefault();
        var movie_id = this.currentMovie._id;
        console.log('addreview is running in component.');
        var observable = this._movieService.addNewReview(this.currentReview, this.currentMovie._id);
        observable.subscribe(function (err) {
            console.log(err);
            _this.errors = err;
            _this.currentReview = {
                name: '',
                quantity: 0,
                price: 0
            };
            _this.goReviews(movie_id);
        });
    };
    NewReviewComponent = __decorate([
        core_1.Component({
            selector: 'app-new-review',
            template: __webpack_require__("./src/app/movies/new-review/new-review.component.html"),
            styles: [__webpack_require__("./src/app/movies/new-review/new-review.component.css")]
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], NewReviewComponent);
    return NewReviewComponent;
}());
exports.NewReviewComponent = NewReviewComponent;


/***/ }),

/***/ "./src/app/movies/see-reviews/see-reviews.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n\tfont-family: arial;\r\n\tfont-size: 20pt;\r\n}\r\n#red{\r\n\tcolor: red;\r\n}\r\ntable td{\r\n\tborder: 1px solid black;\r\n}\r\ntable th{\r\n\tborder: 1px solid black;\r\n}\r\ntable{\r\n\tpadding: 5px;\r\n}"

/***/ }),

/***/ "./src/app/movies/see-reviews/see-reviews.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button [routerLink]=\"['/movies']\">See all Movies</button>\n<button (click)=\"deleteMovie($event)\">Delete Movie</button>\n\n<div>\n\t<h2>Reviews for {{title}}</h2>\n\t<table>\n\t\t<tr>\n\t\t\t<th>Reviewer</th>\n\t\t\t<th>Stars</th>\n\t\t\t<th>Reviews</th>\n\t\t\t<th>Action</th>\n\t\t</tr>\n\t\t<tr *ngFor=\"let review of reviews\">\n\t\t\t<td>{{review.name}}</td>\n\t\t\t<td>{{review.stars}}</td>\n\t\t\t<td>{{review.review}}</td>\n\t\t\t<td><button (click)=\"deleteReview($event, review._id)\">Delete Review</button></td>\n\t\t</tr>\n\t</table>\n</div>\n"

/***/ }),

/***/ "./src/app/movies/see-reviews/see-reviews.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var movie_service_1 = __webpack_require__("./src/app/movie.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var SeeReviewsComponent = /** @class */ (function () {
    function SeeReviewsComponent(_movieService, _router, _route) {
        this._movieService = _movieService;
        this._router = _router;
        this._route = _route;
        this.title = '';
        this.reviews = [];
        this.currentMovie = {};
    }
    SeeReviewsComponent.prototype.ngOnInit = function () {
        this.getOneMovie();
        this.getReviews();
    };
    SeeReviewsComponent.prototype.goHome = function () {
        this._router.navigate(['/movies']);
    };
    SeeReviewsComponent.prototype.deleteMovie = function ($event) {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var observable = _this._movieService.deleteMovie(params['id']);
            observable.subscribe(function (res) {
                console.log(res);
                _this.goHome();
            });
        });
    };
    SeeReviewsComponent.prototype.getOneMovie = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            // console.log(params['id']);
            var observable = _this._movieService.getOneMovie(params['id']);
            observable.subscribe(function (data) {
                console.log(observable);
                _this.currentMovie = data.json().data;
                _this.title = _this.currentMovie.title;
            });
        });
    };
    ;
    SeeReviewsComponent.prototype.getReviews = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var observable = _this._movieService.getReviews(params['id']);
            observable.subscribe(function (data) {
                console.log(data);
                _this.reviews = data.json().data;
            });
        });
    };
    SeeReviewsComponent.prototype.deleteReview = function ($event, reviewID) {
        var _this = this;
        var observable = this._movieService.deleteReview(reviewID);
        observable.subscribe(function (res) {
            console.log(res);
            _this.getReviews();
        });
    };
    ;
    SeeReviewsComponent = __decorate([
        core_1.Component({
            selector: 'app-see-reviews',
            template: __webpack_require__("./src/app/movies/see-reviews/see-reviews.component.html"),
            styles: [__webpack_require__("./src/app/movies/see-reviews/see-reviews.component.css")]
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], SeeReviewsComponent);
    return SeeReviewsComponent;
}());
exports.SeeReviewsComponent = SeeReviewsComponent;


/***/ }),

/***/ "./src/app/movies/show-movies/show-movies.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n\tfont-family: arial;\r\n\tfont-size: 20pt;\r\n}\r\n#red{\r\n\tcolor: red;\r\n}"

/***/ }),

/***/ "./src/app/movies/show-movies/show-movies.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n\t<h3>Movie List</h3>\n\t<button [routerLink]=\"['/movies/new']\">Add a new movie</button>\n\t<table>\n\t\t<tr>\n\t\t\t<th>Movie Title</th>\n\t\t\t<th>Available Action</th>\n\t\t\t<th>Average review score</th>\n\t\t</tr>\n\t\t<tr *ngFor=\"let movie of all_movies\">\n\t\t\t<td>{{movie.title}}</td>\n\t\t\t<td><button [routerLink]=\"['/movie/'+ movie._id]\" >Read Reviews</button><button [routerLink]=\"['/movies/review/'+ movie._id]\" >Write Review</button></td>\n\t\t\t<td>*place Average score here*</td>\n\t\t</tr>\n\t</table>\n"

/***/ }),

/***/ "./src/app/movies/show-movies/show-movies.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var movie_service_1 = __webpack_require__("./src/app/movie.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ShowMoviesComponent = /** @class */ (function () {
    function ShowMoviesComponent(_movieService, _router, _route) {
        this._movieService = _movieService;
        this._router = _router;
        this._route = _route;
        this.all_movies = [];
    }
    ShowMoviesComponent.prototype.ngOnInit = function () {
        this.showAllMovies();
    };
    ShowMoviesComponent.prototype.showAllMovies = function () {
        var _this = this;
        var observable = this._movieService.showAllMovies();
        observable.subscribe(function (data) {
            // console.log(data);
            _this.all_movies = data.json().data;
        });
    };
    ShowMoviesComponent.prototype.goHome = function () {
        this._router.navigate(['/movies']);
    };
    ShowMoviesComponent = __decorate([
        core_1.Component({
            selector: 'app-show-movies',
            template: __webpack_require__("./src/app/movies/show-movies/show-movies.component.html"),
            styles: [__webpack_require__("./src/app/movies/show-movies/show-movies.component.css")]
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], ShowMoviesComponent);
    return ShowMoviesComponent;
}());
exports.ShowMoviesComponent = ShowMoviesComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
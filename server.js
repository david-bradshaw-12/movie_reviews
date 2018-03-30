let express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose'),
    path        = require('path'),
    session     = require('express-session'),
    body_parser = require('body-parser');

app.use(express.static( __dirname + '/client/dist' ));
app.use(body_parser.json());
app.use(express.static(path.join(__dirname, "static")));
app.use(session({
    secret: 'CodingDojoRocksF4hWAhtgUb8BrRqWPuR$%4w^@FSB3j*VfumMEJB8SPpr57%aqRmsEyHGhJKcvgu9#W&5ZvUrCZ*q4c%8^A9RJ49@Mf3X',
    proxy: true,
    resave: false,
    saveUninitialized: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/moviesDB');
mongoose.Promise = global.Promise;

// Example User Schema
let Schema = mongoose.Schema;


let MovieSchema = new mongoose.Schema({
  title: {type: String, required: [true, 'Title is required'],
              minlength: [3, 'Title name must be at least 3 characters.']},
  reviews: [{type: Schema.Types.ObjectId, max: 3, ref: 'review'}]
}, {timestamps: true})

mongoose.model('movie', MovieSchema);
let Movie = mongoose.model('movie');

var ReviewSchema = new mongoose.Schema({
  _movie: {type: Schema.Types.ObjectId, ref: 'movie'},
  name: {type: String, minlength: [3, "Sorry, your name has to be 3 characters long. Get a longer name."]},
  stars: {type: Number, required: [true,'Must specify number of stars.'], min: [1,'1 is the minimum.'], max: [5, '5 is the most that can be awarded.']},
  review: {type: String, required: [true, 'Must have a review.'], minlength: [3, 'Must have at least 3 character in review.']}
}, {timestamps: true });
mongoose.model('review', ReviewSchema);
var Review = mongoose.model('review');

app.get('/seemovies', (req, res) => {
  let movies = Movie.find().sort({ stars : 1 }).exec( (err, movies) => {
    //sort these by type for BB!find().sort({type})
    if (err) {
      res.status(400).json({message: 'Error', error: err});
    } else {
      // console.log(pets);
      res.json({message: 'Success', data: movies})
    }
  });
  // res.render('index');
})
app.get('/movie/one/:id', (req, res) => {
  let movie = Movie.findOne({_id: req.params.id}, (err, movie) => {
    if (err) {
      res.status(400).json({message: 'Error', error: err});
    } else {
      res.json({message: 'Success', data: movie})
    }
  });
});
app.post('/movies/add', (req, res) =>{
    let movie = new Movie(req.body);
    // console.log('movie: ' + movie);
    // console.log('req.body[review]'+ req.body['review']);
    movie.save( (err) => {
        if(err){
            res.json({message: 'ERRRRRRRROOOORRRRRRRR', errors: err})
        }
        else {

            let review = new Review(req.body['review']);
            // console.log('new review: '+review);
            review._movie = movie._id;
            review.save( (err) => {  
            if (err){
              res.json({message: 'problem with saving review', error: err})
            } else{  
            res.json({message: 'Success', data: movie});
            } 
          });
        }
    });
})
app.post('/movies/addreview/:id', (req, res) =>{
  let movie = Movie.findOne({_id: req.params.id}, (err, movie) => {
    if (err){
      res.json({message: 'error'})
    } else {
      let review = new Review(req.body);
      review._movie = movie._id;
      review.save( (err) =>{
        if (err) {
          console.log("error with saving.")
          res.json({message: 'Error', error: err});
        } else {
          res.json({message: 'Success', data: review});
      }
    });
  }
});
});
app.put('/movies/edit/:id', (req, res) => {
  let movie = Movie.findOne({_id: req.params.id},
    (err, movie) => {
  console.log(req.body+"  the router function is running.");
    if (err) {
      res.json({message: 'Error cannot find.', error: err});
    } else {
      movie.name = req.body.name;
      movie.type = req.body.type;
      movie.description = req.body.description;
      movie.save( (err) => {
        if (err) {
          console.log("error with saving.")
          res.json({message: 'Error', error: err});
        } else {
          res.json({message: 'Success', data: pet});
        };
      });
    }
    });  
  });

app.delete('/movie/delete/:id', (req, res) => {
  console.log('deleting');
  // console.log(req.params.id);
  Movie.findOneAndRemove({_id: req.params.id}, (err) => {
    if (err) {
      res.json({message: 'Error', error: err});
    } else {
      res.json({message: 'Sucessful delete'});
    }
  });
});
app.get('/movie/reviews/:id', (req, res) =>{
  let review = Review.find({_movie: req.params.id}).sort({stars: -1}).exec( (err, review) => {
    if (err) {
      res.status(400).json({message: 'Error', error: err});
    } else {
      res.json({message: 'Success', data: review})
    }
  });
});

app.delete('/movies/reviews/delete/:id', (req, res) =>
  Review.findOneAndRemove({_id: req.params.id}, (err) =>{
    if (err){
      res.json({message: 'Error', error: err})
    } else {
      res.json({message: 'Successful delete of review'})
    }
  }))

// app.patch('/pets/increaseLike/:id', (req, res) => {
//   console.log('addLike on server.js is ran.');
//   Pet.findByIdAndUpdate(req.params.id, {
//     $inc: { likes: 1}
//   }, (err) => {
//     if (err){
//       res.json({message: 'Errrroooooorrr', error: err})
//     } else {
//       res.json({message: 'successful update like'})
//     }
//   });
// });
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./client/dist/index.html"))
});
// Other routes

let server = app.listen(6789, () => {
    console.log("listening on port 6789");
});
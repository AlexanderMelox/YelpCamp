// Initializes all dependecies
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

// Sets the port to listen to
const port = 3000;

// Mongoose connects to mongoDB
mongoose.connect('mongodb://localhost/yelp_camp');
// Tells express to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
// Sets the view engines to ejs
app.set('view engine', 'ejs');

// Schema Setup
const campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

// Creates a mongoose model
const Campground = mongoose.model('Campground', campgroundSchema);

// Inserts new campground to database
Campground.create({
    name: 'Granite Hill',
    image: 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-0.3.5&s=73115e54fa3d099fcb2d92ccf12eee41&auto=format&fit=crop&w=1953&q=80',
    description: 'This is a huge granite hill, no bathrooms, no water. Beautiful granite'
  }, (err, campground) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Newly created campground', campground);
  } 
});

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/campgrounds', (req, res) => {
  // Get all campgrounds from DB
  Campground.find({}, (err, allCampgrounds) => {
    if (err) {
      console.log(err);
    } else {
      res.render('campgrounds', { campgrounds: allCampgrounds }) ;      
    }
  });
});

// CREATE - adds new campground to database
app.post('/campgrounds', (req, res) => {
  // get data from form and add to campgrounds array
  const { name, image } = req.body;
  // creates an object with the request body
  const newCampground = { name, image };
  // create a new campground and save to database
  Campground.create(newCampground, (err, newlyCreate) => {
    if (err) {
      console.log(err);
    } else {
      // redirect back to campgrounds page
      res.redirect('/campgrounds');
    }
  });
});

// NEW - show form to create a new campground
app.get('/campgrounds/new', (req, res) => res.render('new'));

app.get('/camgrounds/:id', (req, res) => {
  // finde the campground with provided id
  // render show template with that campground
  res.send('This will be the show page one day!');
});

// Tells express to listen on port and logs to the console
app.listen(port, () => console.log('App is running on port ' + port));
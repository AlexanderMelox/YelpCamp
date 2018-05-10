const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/campgrounds', (req, res) => {
  const campgrounds = [
    {
      name: 'Salmon Creek',
      image: 'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c85daa025ee04c951b6ac12fe3ba031a&auto=format&fit=crop&w=1950&q=80'
    },
    {
      name: 'Granite Hill',
      image: 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-0.3.5&s=73115e54fa3d099fcb2d92ccf12eee41&auto=format&fit=crop&w=1953&q=80'
    }, 
    {
      name: 'Mountain Goat\'s Rest',
      image: 'https://images.unsplash.com/19/nomad.JPG?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjE2ODQ0fQ&s=da1f2d5da6e0fff9a6c4c4327af6771d&auto=format&fit=crop&w=1588&q=80'
    }
  ];

  res.render('campgrounds', { campgrounds });
});

app.post('/campgrounds', (req, res) => {
  // get data from form and add to campgrounds array
  // redirect back to campgrounds page
});

app.listen(port, () => console.log('App is running on port ' + port));
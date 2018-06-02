const express = require('express'),
      morgan = require('morgan');

// Declaring the api
const api = express();

// Importing routes
const hotelRoutes = require('./routes/hotel');

// Settings
api.set('port', process.env.PORT || 3000);

// Middlewares
// Register incoming requests
api.use(morgan('dev'));

// Declare routes
api.use('/', hotelRoutes);

// Starting the server
api.listen(api.get('port'), () => {
  console.log('Running server on port 3000');
});

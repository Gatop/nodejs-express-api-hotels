/**************
 * Base Setup *
 **************/

const express    = require('express'),
      morgan     = require('morgan'),
      bodyParser = require('body-parser'),
      mongoose   = require('mongoose');

// Declaring the api
const api = express();

// Setting the port
api.set('port', process.env.PORT || 3500);

// Configure bodyParser allowing us getting data from a POST
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

// Connect to mongo database
mongoose.connect('mongodb://jegauser:test123@jega-cluster-shard-00-00-wykks.mongodb.net:27017,jega-cluster-shard-00-01-wykks.mongodb.net:27017,jega-cluster-shard-00-02-wykks.mongodb.net:27017/almundo?ssl=true&replicaSet=Jega-cluster-shard-0&authSource=admin&retryWrites=true');

/***************
 * Middlewares *
 ***************/

 // Register incoming requests and log the information
 api.use(morgan('dev'));

/**************
 *   Routes   *
 **************/

// Importing routes
const hotelRoutes = require('./routes/hotel');

// Declare routes
api.use('/', hotelRoutes);

/***********************
 * Starting the server *
 ***********************/

api.listen(api.get('port'), () => {
  console.log('Running server on port 3500');
});

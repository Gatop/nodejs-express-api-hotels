const controller = {};
var data  = require('./data.json');
var Hotel = require('../models/hotel.js');

/**
 * GET ALL hotels.
 *
 * @param object $req
 *   The request to be processed.
 * @param object $res
 *   The response.
 */
controller.list = (req, res) => {
    // Find stored docs in database
    // If there is any problem return data.json
    Hotel.find(function(err, hotels) {
        if (err)
            res.send(data);
        res.json(hotels);
    });
};

/**
 * POST an hotel. Store it into database
 *
 * @param object $req
 *   The request to be processed.
 * @param object $res
 *   The response.
 */
controller.create = (req, res) => {
    // Creating new entity to be saved
    var hotel = new Hotel();
    hotel.id        = req.body.id;
    hotel.name      = req.body.name;
    hotel.stars     = req.body.stars;
    hotel.price     = req.body.price;
    hotel.image     = req.body.image;
    hotel.amenities = req.body.amenities;

    // Save the hotel and check for errors
    hotel.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Hotel created!' });
    });
};

module.exports = controller;

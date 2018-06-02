const controller = {};
var data  = require('../../documentation/data.json');
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
    Hotel.find(function(err, hotels) {
        // Handle an error response
        // If there is any problem return data.json
        if (err)
            return res.send(data);
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
        // Handle an error response
        if (err) {
            return res.send(err);
        }
        res.json({ message: 'Hotel created!' });
    });
};

/**
 * GET a single hotel by id.
 *
 * @param object $req
 *   The request to be processed.
 * @param object $res
 *   The response.
 */
controller.findById = (req, res) => {
    // Set the query to find by id
    var query = { id: req.params.hotel_id };
    // Find the hotel by id
    Hotel.findOne(query, function(err, hotel) {
        // Handle an error response
        if (err)
            return res.send(err);
        if (!hotel)
            return res.send({ message: 'Object not found.' });
        res.json(hotel);
    });
};

/**
 * PUT (update) a single hotel by id.
 *
 * @param object $req
 *   The request to be processed.
 * @param object $res
 *   The response.
 */
controller.update = (req, res) => {
    // Set the query to find by id
    var query = { id: req.params.hotel_id };
    // Find the hotel by id
    Hotel.findOne(query, function(err, hotel) {
        // Handle an error response
        if (err)
            return res.send(err);
        if (!hotel)
            return res.send({ message: 'Object not found. Cannot be updated.' });
        // Update the field (if were sent in the request)
        if (req.body.name)
            hotel.name = req.body.name;
        if (req.body.stars)
            hotel.stars = req.body.stars;
        if (req.body.price)
            hotel.price = req.body.price;
        if (req.body.image)
            hotel.image = req.body.image;
        if (req.body.amenities)
            hotel.amenities = req.body.amenities;

        // Update the hotel and check for errors
        hotel.save(function(err) {
            // Handle an error response
            if (err)
                return res.send(err);

            res.json({ message: 'Hotel updated!' });
        });
    });
};

/**
 * DELETE a single hotel by id.
 *
 * @param object $req
 *   The request to be processed.
 * @param object $res
 *   The response.
 */
controller.delete = (req, res) => {
    // Set the query to find by id
    var query = { id: req.params.hotel_id };
    // delete the found hotel by id
    Hotel.deleteOne(query, function(err) {
        // Handle an error response
        if (err)
            return res.send(err);

        res.json({ message: 'Hotel deleted!' });
    });
};

module.exports = controller;

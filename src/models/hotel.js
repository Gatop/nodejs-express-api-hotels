var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// Declaring the Hotel schema
var HotelSchema = new Schema({
    id: String,
    name: String,
    stars: Number,
    price: Number,
    image: String,
    amenities: [String],
});

module.exports = mongoose.model('Hotel', HotelSchema);

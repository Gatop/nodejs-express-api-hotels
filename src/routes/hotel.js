const router = require('express').Router();
const hotelController = require('../controllers/hotelController');

// Routes related with HotelSchema
// @see hotelController
router.get('/hotels', hotelController.list);
router.post('/hotels', hotelController.create);
router.get('/hotels/:hotel_id', hotelController.findById);
router.put('/hotels/:hotel_id', hotelController.update);
router.delete('/hotels/:hotel_id', hotelController.delete);

module.exports = router;

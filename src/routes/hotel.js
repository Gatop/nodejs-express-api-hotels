const router = require('express').Router();

const hotelController = require('../controllers/hotelController');

router.get('/hotels', hotelController.list);

module.exports = router;

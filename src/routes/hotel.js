const router = require('express').Router();

const hotelController = require('../controllers/hotelController');

router.get('/hotels', hotelController.list);
router.post('/hotels', hotelController.create);

module.exports = router;

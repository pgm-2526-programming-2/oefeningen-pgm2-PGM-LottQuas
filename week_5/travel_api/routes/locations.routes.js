const { Router } = require('express');
const { addLocation, getLocations } = require('../controllers/locations.controllers');
const router = Router()

router.get('/locations', getLocations);
router.post('/locations', addLocation);

module.exports = router;

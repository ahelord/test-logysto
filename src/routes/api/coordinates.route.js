const express = require('express');
const CoordinatesController = require('../../controllers/coordinates.controller');
const router = express.Router();

router
	.route('/search')
	.post(CoordinatesController.searchCoordinates);

module.exports = router;

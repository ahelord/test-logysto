const express = require('express');
const CoordinatesController = require('../../controllers/coordinates.controller');
const AuthMiddleware = require('../../middlewares/auth.middleware');
const router = express.Router();

router
	.route('/search')
	.post(AuthMiddleware,CoordinatesController.searchCoordinates);

module.exports = router;

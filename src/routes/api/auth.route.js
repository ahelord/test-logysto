const express = require('express');
const AuthController = require('../../controllers/auth.controller');
const router = express.Router();

router
	.route('/sign-up')
	.post(AuthController.signUp);

router
	.route('/login')
	.post(AuthController.login);

	router
	.route('/refresh-token')
	.post(AuthController.refreshToken);
module.exports = router;

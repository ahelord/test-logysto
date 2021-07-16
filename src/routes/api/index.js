require('dotenv').config();
const express = require('express');
const router = express.Router();
const AuthRoute = require('./auth.route');
const CoordinatesRoute = require('./coordinates.route');

// Routes
router.use('/coordinates', CoordinatesRoute);
router.use('/auth', AuthRoute);
router.get('/status', (req, res) => res.send('OK'));

module.exports = router;

const express = require('express');
const { getMovies } = require('../controllers/movies.controller');

const router = express.Router();

router.get('/', getMovies);

module.exports = router;

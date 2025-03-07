const express = require('express');
const { getFootballTeams } = require('../controllers/football.controller');

const router = express.Router();

router.get('/', getFootballTeams);

module.exports = router;

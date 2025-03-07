const Football = require('../models/football.model');

const getFootballTeams = async (req, res) => {
    const teams = await Football.find();
    res.json(teams);
};

module.exports = { getFootballTeams };

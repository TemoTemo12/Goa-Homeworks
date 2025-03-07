const mongoose = require('mongoose');

const FootballSchema = new mongoose.Schema({
    team: String,
    league: String,
    country: String,
});

module.exports = mongoose.model('Football', FootballSchema);

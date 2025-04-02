const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    resetToken: String,
    resetTokenExpiry: Date
});

module.exports = mongoose.model('User', UserSchema);

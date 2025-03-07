const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
});

module.exports = mongoose.model('Post', PostSchema);

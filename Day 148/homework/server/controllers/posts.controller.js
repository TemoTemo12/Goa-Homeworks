const Post = require('../models/post.model');

const getPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
};

module.exports = { getPosts };

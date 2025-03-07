const Message = require('../models/message.model');

const getMessages = async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
};

module.exports = { getMessages };

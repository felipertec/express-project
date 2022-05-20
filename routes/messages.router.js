const express = require('express');

const messagesController = require('../controllers/messages.controller');

const messagesRounter = express.Router();
messagesRounter.use((req,res,next) => {
    console.log("ip address: ", req.ip);
    next();
});
messagesRounter.get('/', messagesController.getMessages);
messagesRounter.post('/', messagesController.postMessage);

module.exports = messagesRounter;
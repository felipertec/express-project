const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRounter = express.Router();

friendsRounter.use((req,res,next) =>{
    console.log('ip address: ', req.ip);
    next();
})
friendsRounter.post('/', friendsController.postFriend);
friendsRounter.get('/', friendsController.getFriends);
friendsRounter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRounter;
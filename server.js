const express = require('express');
const app = express();

//import modules here
const friendsRounter = require('./routes/friends.router');
const messagesRounter = require('./routes/messages.router');


const PORT = 3000;

// middleware
app.use((req,res,next) =>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})

app.use(express.json());

//Routes here
app.use('/friends',friendsRounter);
app.use('/messages',messagesRounter);

app.listen(PORT, () =>{
    console.log(`Listening on ${PORT} ...`);
})
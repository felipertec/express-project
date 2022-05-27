const express = require('express');
const path = require('path');

const app = express();

//import modules here
const friendsRounter = require('./routes/friends.router');
const messagesRounter = require('./routes/messages.router');

//template engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'views'));

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

app.use('/site', express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) =>{
    res.render('index', {
        title: 'My Favorite Friends',
        caption: 'Let\'s go to travel'
    });
});

app.listen(PORT, () =>{
    console.log(`Listening on ${PORT} ...`);
})
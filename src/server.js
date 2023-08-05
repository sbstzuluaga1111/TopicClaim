const express = require('express');
const path = require('path');


const app = express();


app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'views')));


app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) =>{
    res.send('hello world')
});

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
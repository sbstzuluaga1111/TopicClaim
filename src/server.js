const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();


app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'views')));


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes/index.routes'));
app.use(require('./routes/publicacion.routes'));

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
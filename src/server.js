const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');

const app = express();
require('./config/passport');

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'views')));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(require('./routes/index.routes'));
app.use(require('./routes/publicacion.routes'));
app.use(require('./routes/usuarios.routes'));

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;

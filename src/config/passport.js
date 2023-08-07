const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Empres = require('../models/Empresa');
const User = require('../models/User');

passport.use('logingU', new LocalStrategy({
    usernameField: 'email',
    passportField: 'password',
}, async (email, password, done) => {
    const user = await User.findOne({ email });
    if (!user) {
        return done(null, false, { message: 'No se encontro el usuario' });
    } else {
        const match = await user.matchPassword(password);
        if (match) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'No se encontro el usuario' });
        }
    }
}));

passport.use('logingE', new LocalStrategy({
    usernameField: 'email',
    passportField: 'password',
}, async (email, password, done) => {
    const empres = await Empres.findOne({ email });
    if (!empres) {
        return done(null, false, { message: 'No se encontro el usuario' });
    } else {
        const match = await empres.matchPassword(password);
        if (match) {
            return done(null, empres);
        } else {
            return done(null, false, { message: 'No se encontro el usuario' });
        }
    }
}));

passport.serializeUser((userOrEmpres, done) => {
    done(null, userOrEmpres.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        if (user) {
            done(null, user);
        } else {
            const empresa = await Empres.findById(id);
            if (empresa) {
                done(null, empresa);
            } else {
                done(new Error('User or Empresa not found'), null);
            }
        }
    } catch (error) {
        done(error, null);
    }
});

const path = require('path');
const User = require('../models/User');
const Empresa = require('../models/Empresa');
const passport = require('passport');
const usersCtrl = {};

//registro como usuario
usersCtrl.renderRegisU = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','registro-Consumidor.html');
    res.sendFile(contacPath);
}

// Registro como usuario
usersCtrl.initRegisU = async (req, res) => {
    const { email, password } = req.body;

    // Crear una instancia de usuario
    const newUser = new User({ email, password });

    // Cifrar la contraseña y luego guardar
    await newUser.encryptPassword(password); // Pasa la contraseña al método
    await newUser.save();

    // Redireccionar a la página de inicio
    res.redirect('/');
}


//registro empresa
usersCtrl.renderRegisE = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','registro-Empresa.html');
    res.sendFile(contacPath);
}

// Registro empresa
usersCtrl.initRegisE = async (req, res) => {
    const { email, password } = req.body;

    // Crear una instancia de empresa
    const newEmpres = new Empresa({ email, password });

    // Cifrar la contraseña y luego guardar
    await newEmpres.encryptPassword(password); // Pasa la contraseña al método
    await newEmpres.save();

    // Redireccionar a la página de inicio
    res.redirect('/');
}









//ingreso como usuario
usersCtrl.renderIngreU = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','ingreso-Consumidor.html');
    res.sendFile(contacPath);
}

usersCtrl.initIngreU = (req, res, next) => {
    passport.authenticate('logingU', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect('/?loginError=true'); // Agrega ?loginError=true a la URL
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        return res.redirect('/publics');
      });
    })(req, res, next);
  };


//ingreso como empresa
usersCtrl.renderIngreE = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','ingreso-Empresa.html');
    res.sendFile(contacPath);
}

usersCtrl.initIngreE = (req, res, next) => {
    passport.authenticate('logingE', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect('/?loginError=true'); // Agrega ?loginError=true a la URL
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        return res.redirect('/publics');
      });
    })(req, res, next);
  };

usersCtrl.fuera = (req, res) => {
    req.logout(function(err) {
      if (err) {
        console.error(err);
        return next(err);
      }
      res.clearCookie('connect.sid');
      res.redirect('/?logout=true'); // Agrega ?logout=true a la URL
    });
  };

module.exports = usersCtrl;
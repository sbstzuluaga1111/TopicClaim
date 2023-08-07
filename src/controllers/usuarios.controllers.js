const path = require('path');
const User = require('../models/User');
const Empresa = require('../models/Empresa');
const passport = require('passport');
const { MongoError } = require('mongoose');
const usersCtrl = {};

//registro usuario
usersCtrl.renderRegisU = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','registro-Consumidor.html');
    res.sendFile(contacPath);
}


usersCtrl.initRegisU = async (req, res) => {
  const { email, password } = req.body;

  try {
      const newUser = new User({ email, password });
      await newUser.encryptPassword(password);
      await newUser.save();
      return res.redirect('/?success=true');
  } catch (error) {
      return res.redirect(`/registro/usuario?error=${encodeURIComponent('El usuario ya se encuentra registrado')}`);
  }
};





//registro empresa
usersCtrl.renderRegisE = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','registro-Empresa.html');
    res.sendFile(contacPath);
}

usersCtrl.initRegisE = async (req, res) => {
  const { email, password } = req.body;
  try {
      const newEmpres = new Empresa({ email, password });
      await newEmpres.encryptPassword(password);
      await newEmpres.save();
      return res.redirect('/?success=true');
  } catch (error) {
      return res.redirect(`/registro/empresa?error=${encodeURIComponent('El usuario ya se encuentra registrado')}`);
  }
}







//ingreso como usuario
usersCtrl.renderIngreU = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','ingreso-Consumidor.html');
    res.sendFile(contacPath);
}

usersCtrl.initIngreU = (req, res, next) => {
    passport.authenticate('logingU', (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect('/?loginError=true');
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
  passport.authenticate('logingE', (err, empres) => {
    if (err) {
      return next(err);
    }
    if (!empres) {
      return res.redirect('/?loginError=true'); 
    }
    req.logIn(empres, (err) => {
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
      res.redirect('/?logout=true');
    });
  };

module.exports = usersCtrl;
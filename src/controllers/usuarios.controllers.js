const path = require('path');
const User = require('../models/User');
const Empresa = require('../models/Empresa');
const usersCtrl = {};

//registro como usuario
usersCtrl.renderRegisU = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','registro-Consumidor.html');
    res.sendFile(contacPath);
}

usersCtrl.initRegisU = async (req, res) =>{
    res.redirect('/');
    const {email,password} = req.body;
    const newUser = new User({email, password})
    await newUser.save();
}

//registro empresa
usersCtrl.renderRegisE = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','registro-Empresa.html');
    res.sendFile(contacPath);
}

usersCtrl.initRegisE = async (req, res) =>{
    res.redirect('/');
    const {email,password} = req.body;
    const newEmpres = new Empresa({email, password})
    await newEmpres.save();
}








//ingreso como usuario
usersCtrl.renderIngreU = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','ingreso-Consumidor.html');
    res.sendFile(contacPath);
}

usersCtrl.initIngreU = (req, res) =>{
    res.send('signin');
}


//ingreso como empresa
usersCtrl.renderIngreE = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','ingreso-Empresa.html');
    res.sendFile(contacPath);
}

usersCtrl.initIngreE = (req, res) =>{
    res.send('signin');
}

usersCtrl.fuera = (req, res) =>{
    res.redirect('/');
};

module.exports = usersCtrl;
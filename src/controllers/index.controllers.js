
const path = require('path');
const indexCtrl = {};


indexCtrl.renderIndex = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','index.html');
    res.sendFile(contacPath);
}

indexCtrl.renderContac = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','contac.html');
    res.sendFile(contacPath);
}

indexCtrl.renderRegisU = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','registro-Consumidor.html');
    res.sendFile(contacPath);
}

indexCtrl.renderRegisE = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','registro-Empresa.html');
    res.sendFile(contacPath);
}

indexCtrl.renderIngreU = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','ingreso-Consumidor.html');
    res.sendFile(contacPath);
}

indexCtrl.renderIngreE = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','ingreso-Empresa.html');
    res.sendFile(contacPath);
}

module.exports = indexCtrl;
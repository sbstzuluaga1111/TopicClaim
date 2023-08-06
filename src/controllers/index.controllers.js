
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

module.exports = indexCtrl;
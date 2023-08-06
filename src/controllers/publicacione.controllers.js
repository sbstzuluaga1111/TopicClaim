const path = require('path');
const publicCtrl = {};

publicCtrl.renderPublicForm = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','pages','publicacion.html');
    res.sendFile(contacPath);
}
publicCtrl.createPublicForm = (req, res) =>{
    res.send('new public add');
}

publicCtrl.rendersPublicsForm = (req, res) =>{
    const contacPath = path.join(__dirname, '..','views','entrada','pages','home.html');
    res.sendFile(contacPath);
}

module.exports = publicCtrl;
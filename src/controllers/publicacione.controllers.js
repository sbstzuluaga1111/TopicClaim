const path = require('path');
const Public = require('../models/Publicaciones');
const fs = require('fs').promises;

const publicCtrl = {};

publicCtrl.renderPublicForm = (req, res) => {
    const contacPath = path.join(__dirname, '..', 'views', 'entrada', 'pages', 'publicacion.html');
    res.sendFile(contacPath);
};

publicCtrl.createPublicForm = async (req, res) => {
    const { titulo, descripcion } = req.body;
    const newPublic = new Public({ titulo, descripcion });
    await newPublic.save();
    res.redirect('/publics');
};

publicCtrl.rendersPublicsForm = async (req, res) => {
    try {
        const publics = await Public.find();
        const filePath = path.join(__dirname, '..', 'views', 'entrada', 'pages', 'home.html');

        const data = await fs.readFile(filePath, 'utf8');
        const modifiedData = data.replace('{{publics}}', generatePublicsHTML(publics));

        res.send(modifiedData);
    } catch (err) {
        res.status(500).send('Error interno del servidor');
    }
};


function generatePublicsHTML(publics) {
    let html = '';
    for (const publicacion of publics) {
        html += `
            <div id="list-item-${publicacion._id}" class="card2 epad">
                <img src="../../img/HatchfulExport-All/logo.png" width="10%">
                <h1>${publicacion.titulo}</h1>
                <p>${publicacion.descripcion}</p>
                <button class="btn btn-primary">Mas informacion</button>
            </div>
        `;
    }
    return html;
}

module.exports = publicCtrl;

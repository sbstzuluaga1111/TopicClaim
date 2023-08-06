const {Schema, model} = require('mongoose');

const PublicShema = new Schema({
    titulo:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true,
    },
    
},{
    timestamps: true
})

module.exports = model('Public', PublicShema)
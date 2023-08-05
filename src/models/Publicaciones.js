const {Shema, model} = require('mongoose');

const NoteShema = new Shema({
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

module.exports = model('Note', NoteShema)
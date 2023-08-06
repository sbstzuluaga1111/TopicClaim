const {Shema, model} = require ('mongoose');
const bcrypt = require ('bcryptjs');

const UserShema = new Shema({
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
},{
    timestamps: true
});

UserShema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserShema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = model('User', UserShema)


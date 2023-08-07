const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const EmpresaSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

EmpresaSchema.methods.encryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(password, salt);
};

EmpresaSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Empresa', EmpresaSchema);

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Importar bcryptjs

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
});

// Antes de guardar el usuario, ciframos la contraseña
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

module.exports = mongoose.model('User', UserSchema);
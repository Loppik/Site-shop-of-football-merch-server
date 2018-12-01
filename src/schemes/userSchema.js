const mongoose = require('../mongoose');

const userSchema = new mongoose.Schema({
    login: String,
    password: String,
    name: String,
    phoneNumber: Number,
    address: String,
    email: String,
    admin: Boolean,
    refreshToken: String,
  }, {
    timestamps: false
  });
  
const User = mongoose.model('users', userSchema);

module.exports = User;
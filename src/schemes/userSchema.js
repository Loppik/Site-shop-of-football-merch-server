const mongoose = require('../mongoose');

const userSchema = new mongoose.Schema({
    login: String,
    password: String,
    name: String,
    phone_number: Number,
    address: String,
    email: String
  }, {
    timestamps: true
  });
  
const User = mongoose.model('users', userSchema);

module.exports = User;
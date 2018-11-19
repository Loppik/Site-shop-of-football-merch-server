const mongoose = require('../mongoose');

const guestSchema = new mongoose.Schema({
    login: String,
    number: Number,
  }, {
    timestamps: false
  });
  
const Guest = mongoose.model('guests', guestSchema);

module.exports = Guest;
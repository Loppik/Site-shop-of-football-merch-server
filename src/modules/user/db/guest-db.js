const Guest = require('../../../schemes/guestSchema');

const getGuest = () => Guest.findOne({ login: 'Guest' });

const updateGuestNumber = (number) => Guest.update({ login: 'Guest' }, { $set: { number: number }})

module.exports = {
  getGuest,
  updateGuestNumber,
};
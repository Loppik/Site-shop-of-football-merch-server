const User = require('../../../schemes/userSchema');

const findUserByLogin = login => User.findOne({ login: login });

const insertUser = user => new User(user).save();

const getUserById = userId => User.findById(userId);

module.exports = {
  findUserByLogin,
  insertUser,
  getUserById,
};

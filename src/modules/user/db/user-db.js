const User = require('../../../schemes/userSchema');

const findUserByLogin = login => User.findOne({ login: login });

const insertUser = user => new User(user).save();

const getUserById = userId => User.findById(userId);

const deleteUserByLogin = login => User.deleteOne({ login: login });

const updateUser = user => User.update({ _id: user.userId }, { $set: { ...user } });

module.exports = {
  findUserByLogin,
  insertUser,
  getUserById,
  deleteUserByLogin,
  updateUser,
};

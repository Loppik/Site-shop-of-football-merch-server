const User = require('../schemes/userSchema');

function findUserByLogin(login) {
  return User.findOne({ login: login });
}

function insertUser(user) {
  let u = new User(user);
  u.save((err) => {
    // TODO: error handler
  })
  return { user };
}

updateRefreshToken = (userId, token) => {
  return User.update({ _id: userId }, { $set: {refreshToken: token }});
}

getRefreshTokenByUserId = (userId) => {
  return User.findOne({_id: userId}, {'_id': 0, 'refreshToken': 1 });
}

module.exports = {
  findUserByLogin,
  insertUser,
  updateRefreshToken,
  getRefreshTokenByUserId,
};


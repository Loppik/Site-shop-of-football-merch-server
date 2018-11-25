const updateRefreshToken = (userId, token) => User.update({ _id: userId }, { $set: { refreshToken: token } });

const getRefreshTokenByUserId = (userId) => User.findOne({ _id: userId }, { '_id': 0, 'refreshToken': 1 });

module.exports = {
  updateRefreshToken,
  getRefreshTokenByUserId,
}
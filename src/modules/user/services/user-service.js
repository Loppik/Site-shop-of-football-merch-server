const userRequest = require('../db/user-db');

const updateUser = async (user) => {
  await userRequest.updateUser(user);
  return userRequest.getUserById(user.userId);
} 

module.exports = {
  updateUser,
}
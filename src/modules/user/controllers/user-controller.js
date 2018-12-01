const userRequest = require('../db/user-db');

const getUserById = (req, res) => {
  userRequest.getUserById(req.body.userId)
    .then((user) => {
      res.send({
        login: user.login,
        name: user.name,
        phoneNumber: user.phoneNumber,
        email: user.email,
        address: user.address,
        admin: user.admin
      });
    })
    .catch((err) => {
      res.status(500).send({ err })
    })
};

module.exports = {
  getUserById,
}
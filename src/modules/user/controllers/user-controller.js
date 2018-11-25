const userRequest = require('../db/user-db');

const getUserById = (req, res) => {
  userRequest.getUserById(req.body.userId)
    .then((user) => {
      res.send({
        login: user.login,
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
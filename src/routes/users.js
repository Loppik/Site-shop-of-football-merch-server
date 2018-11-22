const app = require('express')();
const userRequest = require('../db/users');

app.get('/', (req, res) => {
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
})

module.exports = app;
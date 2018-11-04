const app = require('express')();
const {registration, login} = require('../actions/auth');
const {findUserByLogin, insertUser} = require('../db/users');

app.post('/reg', (req, res) => {
    console.log(req.body);
    registration(req.body)
        .then((user) => {
            res.send({
                user: user.user, // TODO: without password 
            })
        })
        .catch((err) => {
            res.send({msg: 'Registration failed', err: err})
        });
});

app.post('/login', (req, res) => {
    let start = Date.now();
    login(req.body)
        .then((user) => {
            let end = Date.now();
            console.log(`Time: ${end - start}`);
            res.send({
                user,
            })
        })
        .catch((err) => {
            res.send({msg: 'Login failed', err: err})
        });
});

module.exports = app;
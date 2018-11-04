const {findUserByLogin, insertUser} = require('../db/users');
const {validateRegData} = require('../validation/reg');
const {validateLoginData} = require('../validation/login')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function registration(data) {
   return validateRegData(data).then(() => {
        return findUserByLogin(data.login).then(async (user) => user ? (
            Promise.reject('This login already exist')
        ) : (
            insertUser({login: data.login, password: await new Promise((resolve) => bcrypt.hash(data.password, 10, (_, hash) => resolve(hash)))})
        ));
   }, (err) => { 
        return Promise.reject(err);
   });
};

function login(data) {
    return validateLoginData(data).then(() => {
        return findUserByLogin(data.login).then((user) => user ? (
            bcrypt.compare(data.password, user.password).then((res) => res ? (
                generateToken().then((token) => {
                    user.token = token.token;
                    return user;
                })
            ) : (
                Promise.reject('Incorrect password')
            ))
        ) : (
            Promise.reject('No such login')
        ));
    }, (err) => {
        return Promise.reject(err);
    })
    
};

function generateToken() {
    return new Promise((response, reject) => {
        jwt.sign({foo: 'bar'}, 'shhhhh', (err, token) => err ? (
            reject('Token generation error')
        ) : (
            response({token})
        ));
    });
}

module.exports = {
    registration,
    login
}
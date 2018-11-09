const {findUserByLogin, insertUser, updateRefreshToken } = require('../db/users');
const {validateRegData} = require('../validation/reg');
const {validateLoginData} = require('../validation/login')
const bcrypt = require('bcrypt');
const jwtService = require('../jwtService');

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
                jwtService.generateAcsRefTokens({userId: user._id}).then(({ accessToken, refreshToken }) => {
                    return updateRefreshToken(user._id, refreshToken).then(res => ({ accessToken, refreshToken }));
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

module.exports = {
    registration,
    login
}
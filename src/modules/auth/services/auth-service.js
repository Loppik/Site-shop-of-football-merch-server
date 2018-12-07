const userRequest = require('../../user/db/user-db');
const tokenRequest = require('../db/token-db');
const { isInvalidRegData } = require('../../../validation/reg');
const loginValidation = require('../../../validation/login')
const bcrypt = require('bcrypt');
const jwtService = require('../../../jwtService');

const registration = (data) => {
  return isInvalidRegData(data).then(() => {
    return userRequest.findUserByLogin(data.login).then(async (user) => user ? (
      Promise.reject('This login already exist')
    ) : (
      userRequest.insertUser({ ...data, password: await bcrypt.hash(data.password, 10) })
      ));
  }, (err) => {
    return Promise.reject(err);
  });
};

const login = (data) => {
  return loginValidation.isInvalidLoginData(data).then(() => {
    return userRequest.findUserByLogin(data.login).then((user) => user ? (
      bcrypt.compare(data.password, user.password).then((res) => res ? (
        jwtService.generateAcsRefTokens({ userId: user._id }).then(({ accessToken, refreshToken }) => {
          return tokenRequest.updateRefreshToken(user._id, refreshToken).then(res => ({ accessToken, refreshToken }));
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
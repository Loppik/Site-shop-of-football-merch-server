const { findUserByLogin, insertUser, updateRefreshToken } = require('../../user/db/user-db');
const { isInvalidRegData } = require('../../../validation/reg');
const { isInvalidLoginData } = require('../../../validation/login')
const bcrypt = require('bcrypt');
const jwtService = require('../../../jwtService');

const registration = (data) => {
  return isInvalidRegData(data).then(() => {
    return findUserByLogin(data.login).then(async (user) => user ? (
      Promise.reject('This login already exist')
    ) : (
        insertUser({ ...data, password: await bcrypt.hash(data.password, 10) })
      ));
  }, (err) => {
    return Promise.reject(err);
  });
};

const login = (data) => {
  return isInvalidLoginData(data).then(() => {
    return findUserByLogin(data.login).then((user) => user ? (
      bcrypt.compare(data.password, user.password).then((res) => res ? (
        jwtService.generateAcsRefTokens({ userId: user._id }).then(({ accessToken, refreshToken }) => {
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
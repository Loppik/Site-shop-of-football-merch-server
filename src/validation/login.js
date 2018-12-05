const { isInvalidLogin, isInvalidPassword } = require('./validation');

const areLoginObjectFieldsUnavailable = (data) => {
  if (!data.hasOwnProperty('login')) {
    return 'no login field';
  }
  if (!data.hasOwnProperty('password')) {
    return 'no password field';
  }
  return false;
}

const isInvalidLoginData = (data) => {
  return new Promise((resp, rej) => {
    let err = areLoginObjectFieldsUnavailable(data);
    if (err) reject(err);

    err = isInvalidLogin(data.login);
    if (err) rej(err);

    err = isInvalidPassword(data.password);
    if (err) rej(err);

    return resp(false);
  })
}

module.exports = {
  isInvalidLoginData,
  areLoginObjectFieldsUnavailable
}
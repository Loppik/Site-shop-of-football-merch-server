const { isInvalidLogin, isInvalidPassword } = require('./validation');

const areLoginObjectFieldsAvailable = (data) => {
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
    let err = areObjectFieldsAvailable(data);
    if (err) reject(err);

    let err = isInvalidLogin(data);
    if (err) rej(err);

    err = isInvalidPassword(data);
    if (err) rej(err);

    return resp(false);
  })
}

module.exports = {
  isInvalidLoginData
}
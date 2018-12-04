const { isInvalidLogin, isInvalidPassword, isInvalidPhoneNumber, isInvalidName, isInvalidEmail, isInvalidAddress } = require('./validation');

const areLoginObjectFieldsAvailable = (data) => {
  if (!data.hasOwnProperty('login')) {
    return 'no login field';
  }
  if (!data.hasOwnProperty('password')) {
    return 'no password field';
  }
  if (!data.hasOwnProperty('phoneNumber')) {
    return 'no phone number field';
  }
  if (!data.hasOwnProperty('name')) {
    return 'no name field';
  }
  if (!data.hasOwnProperty('email')) {
    return 'no email field';
  }
  if (!data.hasOwnProperty('address')) {
    return 'no address field';
  }
  return false;
}

const isInvalidRegData = (data) => {
  return new Promise((resp, rej) => {
    let err = areObjectFieldsAvailable(data);
    if (err) reject(err);

    err = isInvalidLogin(data.login);
    if (err) rej(err);

    err = isInvalidPassword(data.password);
    if (err) rej(err);

    err = isInvalidPhoneNumber(data.phoneNumber);
    if (err) rej(err);


    err = isInvalidName(data.name);
    if (err) rej(err);


    err = isInvalidEmail(data.email);
    if (err) rej(err);

    err = isInvalidAddress(data.address);
    if (err) rej(err);

    return resp(false);
  });
};

module.exports = {
  isInvalidRegData
}
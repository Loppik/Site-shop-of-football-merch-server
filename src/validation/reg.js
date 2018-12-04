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
    let err = isInvalidLogin(data);
    if (err) rej(err);

    err = isInvalidPassword(data);
    if (err) rej(err);

    err = isInvalidPhoneNumber(data);
    if (err) rej(err);


    err = isInvalidName(data);
    if (err) rej(err);


    err = isInvalidEmail(data);
    if (err) rej(err);

    err = isInvalidAddress(data);
    if (err) rej(err);

    return resp(false);
  });
};

module.exports = {
  isInvalidRegData
}
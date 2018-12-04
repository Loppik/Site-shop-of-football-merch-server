const isInvalidLogin = (data) => {
  if (data.login.length < 3 || data.login.length > 15) {
    return 'incorrect login length';
  }
  const regexp = new RegExp('^[a-zA-Z0-9_]*$');
  if (data.login.search(regexp) == -1) {
    return 'incorrect symbol in login';
  }
  return false;
}

const isInvalidPassword = (data) => {
  if (data.password.length < 3 || data.password.length > 15) {
    return 'incorrect password length';
  }
  const regexp = new RegExp('^[a-zA-Z0-9_]*$');
  if (data.password.search(regexp) == -1) {
    return 'incorrect symbol in password';
  }
  return false;
}

const isInvalidPhoneNumber = (data) => {
  if (data.phoneNumber.toString().length != 7) {
    return 'incorrect phone number length';
  } else {
    if (isNaN(Number(data.phoneNumber))) {
      return 'incorrect phone number format';
    }
  }
  return false;
}

const isInvalidName = (data) => {
  if (data.name.length < 3 || data.name.length > 255) {
    return 'incorrect name length';
  }
  const regexp = new RegExp('^[a-zA-Z]*$');
  if (data.name.search(regexp) == -1) {
    return 'incorrect symbol in name';
  }
  return false;
}

const isInvalidEmail = (data) => {
  const regexp = new RegExp('@');
  if (data.email.match(regexp) == null) {
    return 'no symbol @';
  }
  return false;
}

const isInvalidAddress = (data) => {
  if (data.address.length < 5 || data.address.length > 255) {
    return 'incorrect address length';
  }
  return false;
}

module.exports = {
  isInvalidLogin,
  isInvalidPassword,
  isInvalidPhoneNumber,
  isInvalidName,
  isInvalidEmail,
  isInvalidAddress
}
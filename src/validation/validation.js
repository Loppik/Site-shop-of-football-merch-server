const isInvalidLogin = (data) => {
    if (data.hasOwnProperty('login')) {
        if (data.login.length < 3 || data.login.length > 15) {
            return 'incorrect login length';
        }
        const regexp = new RegExp('^[a-zA-Z0-9_]*$');
        if (data.login.search(regexp) == -1) {
            return 'incorrect symbol in login';
        }
    } else {
        return 'no login';
    }
    return false;
}

const isInvalidPassword = (data) => {
    if (data.hasOwnProperty('password')) {
        if (data.password.length < 3 || data.password.length > 15) {
            return 'incorrect password length';
        }
        const regexp = new RegExp('^[a-zA-Z0-9_]*$');
        if (data.password.search(regexp) == -1) {
            return 'incorrect symbol in password';
        }
    } else {
        return 'no password';
    }
    return false;
}

const isInvalidPhoneNumber = (data) => {
    if (data.hasOwnProperty('phoneNumber')) {
        if (data.phoneNumber.toString().length != 7) {
            return 'incorrect phone number length';
        } else {
            if (isNaN(Number(data.phoneNumber))) {
                return 'incorrect phone number format';
            }
        }
    } else {
        return 'no phone number';
    }
    return false;
}

const isInvalidName = (data) => {
    if (data.hasOwnProperty('name')) {
        if (data.name.length < 3 || data.name.length > 255) {
            return 'incorrect name length';
        }
        const regexp = new RegExp('^[a-zA-Z]*$');
        if (data.name.search(regexp) == -1) {
            return 'incorrect symbol in name';
        }
    } else {
        return 'no name';
    }
    return false;
}

const isInvalidEmail = (data) => {
    if (data.hasOwnProperty('email')) {
        const regexp = new RegExp('@');
        if (data.email.match(regexp) == null) {
            return 'no symbol @';
        }
    } else {
        return 'no email';
    }
    return false;
}

const isInvalidAddress = (data) => {
    if (data.hasOwnProperty('address')) {
        if (data.address.length < 5 || data.address.length > 255) {
            return 'incorrect address length';
        }
    } else {
        return 'no address';
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
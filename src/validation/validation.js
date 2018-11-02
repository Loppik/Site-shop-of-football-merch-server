function isInvalidLogin(data) {
    if (data.hasOwnProperty('login')) {
        // let reg = new RegExp('^[a-zA-Z0-9_]*$');
        if (data.login.length < 3 || data.login.length > 15) {
            return 'incorrect login length';
        }
    } else {
        return 'no login';
    }
    return false;
}

function isInvalidPassword(data) {
    if (data.hasOwnProperty('password')) {
        // let reg = new RegExp('^[a-zA-Z0-9_]*$');
        if (data.password.length < 3 || data.password.length > 15) {
            return 'incorrect password length';
        }
    } else {
        return 'no password';
    }
    return false;
}

function isInvalidPhoneNumber(data) {
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

function isInvalidName(data) {
    if (data.hasOwnProperty('name')) {
        // let reg = new RegExp('^[a-zA-Z0-9_]*$');
        if (data.name.length < 3 || data.name.length > 255) {
            return 'incorrect name length';
        }
    } else {
        return 'no name';
    }
    return false;
}

function isInvalidEmail(data) {
    if (data.hasOwnProperty('email')) {
        // TODO: regexp email
    } else {
        return 'no email';
    }
    return false;
}

function isInvalidAddress(data) {
    if (data.hasOwnProperty('address')) {
        // TODO: regexp 
        if (data.name.length < 5 || data.name.length > 255) {
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
const {isInvalidLogin, isInvalidPassword, isInvalidPhoneNumber, isInvalidName, isInvalidEmail, isInvalidAddress} = require('./validation');

function validateRegData(data) {
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

        return resp(null);
    });
};

module.exports = {
    validateRegData
}
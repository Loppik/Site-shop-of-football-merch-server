const {isInvalidLogin, isInvalidPassword} = require('./validation');

function validateLoginData(data) {
    return new Promise((resp, rej) => {
        let err = isInvalidLogin(data);
        if (err) rej(err);
        
        err = isInvalidPassword(data);
        if (err) rej(err);

        return resp(null);
    })
}

module.exports = {
    validateLoginData
}
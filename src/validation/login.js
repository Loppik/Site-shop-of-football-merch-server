const {isInvalidLogin, isInvalidPassword} = require('./validation');

const isInvalidLoginData = (data) => {
    return new Promise((resp, rej) => {
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
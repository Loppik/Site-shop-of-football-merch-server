const User = require('../schemes/userSchema');

function findUserByLogin(login) {
    return User.findOne({login: login});
}

function insertUser(user) {
    let u = new User(user);
    u.save((err) => {
        if (!err) console.log("++++") // TODO: error handler
    })
    return {user};
}

module.exports = {
    findUserByLogin,
    insertUser
};


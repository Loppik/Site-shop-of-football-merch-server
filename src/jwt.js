const config = require('../config.json');
const expressJwt = require('express-jwt');

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret }).unless({
        path: [
            '/users/authenticate'
        ]
    });
}

module.exports = jwt;
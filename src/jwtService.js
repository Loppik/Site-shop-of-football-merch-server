const jwt = require('jsonwebtoken');
const uuid = require('uuid/v4');
const config = require('../config');

generateAccessToken = (data) => {
  return new Promise((response, reject) => {
      jwt.sign(data, config.secret, { expiresIn: config.accessTokenLifetime }, (err, token) => err ? (
          reject('Token generation error')
      ) : (
          response(token)
      ));
  });
}

generateRefreshToken = () => {
    return uuid();
}

async function generateAcsRefTokens(data) {
    const accessToken = await generateAccessToken(data);
    const refreshToken = generateRefreshToken();
    return { accessToken, refreshToken };
}



module.exports = {
    generateAccessToken,
    generateRefreshToken,
    generateAcsRefTokens,
};

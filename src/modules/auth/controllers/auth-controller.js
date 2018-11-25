const authService = require('../services/auth-service');
const jwtService = require('../../../jwtService');

const tokenRequest = require('../db/token-db');

const registration = (req, res) => {
  console.log(req.body);
  authService.registration(req.body)
    .then((user) => {
      res.send({ msg: 'Successful registration' })
    })
    .catch((err) => {
      res.send({ msg: 'Registration failed', err: err })
    });
};

const login = (req, res) => {
  let start = Date.now();
  authService.login(req.body)
    .then(({ accessToken, refreshToken }) => {
      let end = Date.now();
      console.log(`Time: ${end - start}`);
      res.send({
        accessToken,
        refreshToken,
      })
    })
    .catch((err) => {
      res.send({ msg: 'Login failed', err: err })
    });
};

const refreshToken = async (req, res) => {
  const refreshToken = req.get('Authorization');
  const userId = req.body.userId;
  const userRefreshToken = await tokenRequest.getRefreshTokenByUserId(userId);
  if (userRefreshToken.refreshToken === refreshToken) {
    const { accessToken, refreshToken } = await jwtService.generateAcsRefTokens({ userId });
    await tokenRequest.updateRefreshToken(userId, refreshToken);
    res.send({
      accessToken,
      refreshToken,
    })
  }
  await tokenRequest.updateRefreshToken(userId, "");
  res.send({ err: 'Relogin with login and password' })
};

module.exports = {
  registration,
  login,
  refreshToken,
};

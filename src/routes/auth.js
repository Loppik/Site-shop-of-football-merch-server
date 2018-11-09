const app = require('express')();
const { registration, login } = require('../actions/auth');
const jwtService = require('../jwtService');

const { updateRefreshToken, getRefreshTokenByUserId } = require('../db/users');

app.post('/reg', (req, res) => {
  console.log(req.body);
  registration(req.body)
    .then((user) => {
      res.send({})
    })
    .catch((err) => {
      res.send({ msg: 'Registration failed', err: err })
    });
});

app.post('/login', (req, res) => {
  let start = Date.now();
  login(req.body)
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
});

app.post('/refresh', async (req, res) => {
  const refreshToken = req.get('Authorization');
  const userId = req.body.userId;
  const userRefreshToken = await getRefreshTokenByUserId(userId);
  if (userRefreshToken.refreshToken === refreshToken) {
    const { accessToken, refreshToken } = await jwtService.generateAcsRefTokens({ userId });
    await updateRefreshToken(userId, refreshToken);
    res.send({
      accessToken,
      refreshToken,
    })
  }
  await updateRefreshToken(userId, "");
  res.send({ err: 'Relogin with login and password' })
})

module.exports = app;
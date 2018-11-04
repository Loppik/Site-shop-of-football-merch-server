const app = require('express')();
const { registration, login } = require('../actions/auth');
const jwtService = require('../jwtService');

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
  /*
  jwtService.db.forEach(async (user) => {
    if (user.refreshToken === refreshToken) {
      const { accessToken, refreshToken } = await jwtService.generateAcsRefTokens({ userId: user.userId });
      jwtService.db.push({
        userId: user.userId,
        refreshToken,
      });
      try {
        res.send({})
      } catch(err) {
        console.log(err)
      }
    }
  })
  */
 if (jwtService.db.length != 0) {
  const user = jwtService.db[0];
  if (user.refreshToken === refreshToken) {
    const { accessToken, refreshToken } = await jwtService.generateAcsRefTokens({ userId: user.userId });
    jwtService.db = [];
      jwtService.db.push({
        userId: user.userId,
        refreshToken,
      });
      res.send({
        accessToken, 
        refreshToken,
      })
  }
  jwtService.db = [];
 }
  res.send({ err: 'Relogin with login and password' })
})

module.exports = app;
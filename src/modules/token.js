const parseToken = (req, res, next) => {
  const accessToken = req.get('Authorization');
  if (accessToken) {
    jwt.verify(accessToken, config.secret, (err, decoded) => { // create verify in jwtService
      if (err) {
        res.status(401).send({ err:  err.name })
      }
      req.body.userId = decoded.userId;
    })
  }
  next();
}

module.exports = {
  parseToken,
};
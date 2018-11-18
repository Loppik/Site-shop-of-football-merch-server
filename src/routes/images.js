const path = require('path');
const app = require('express')();

app.get(/.*/, (req, res) => {
  console.log(req.path)
  res.sendFile(path.resolve(`images${req.path}`));
});

module.exports = app;

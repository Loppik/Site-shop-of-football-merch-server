const path = require('path');

const getImage =  (req, res) => {
  console.log(req.path)
  res.sendFile(path.resolve(`images${req.path}`));
};

module.exports = {
  getImage,
};

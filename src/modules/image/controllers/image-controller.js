const path = require('path');

const getImage = (req, res) => {
  res.sendFile(path.resolve(`images${req.path}`));
};

const loadImage = (req, res) => {
  res.status(200).send({});
}

module.exports = {
  getImage,
  loadImage,
};

const path = require('path');

const getImage = (req, res) => {
  console.log(req.path)
  res.sendFile(path.resolve(`images${req.path}`));
};

const loadImage = (req, res) => {
  console.log("+")
  console.log(req.file);
}

module.exports = {
  getImage,
  loadImage,
};

const app = require('express')();
const multer  = require('multer')
const imageController = require('./controllers/image-controller');

const multerConf = {
  storage: multer.diskStorage({
    destination: 'images',
    filename: function (req, file, next) {
      const ext = file.originalname.split('.')[1];
      next(null, file.originalname.split('.')[0] + '.' + ext);
    }
  }),
}

app.get(/.*/, imageController.getImage);
app.post('/', multer(multerConf).any(), imageController.loadImage);

module.exports = app;
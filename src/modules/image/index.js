const app = require('express')();
const multer  = require('multer')
const upload = multer({ dest: 'images/' })
const imageController = require('./controllers/image-controller');

app.get(/.*/, imageController.getImage);
app.post('/', upload.single('l4.docx'), (req, res, next) => {
  console.log(req.file)
});

module.exports = app;
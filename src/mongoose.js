const mongoose = require('mongoose');
const config = require('../config');

mongoose.Promise = Promise;
mongoose.set('debug', config.debug);

mongoose.connect('mongodb://' + config.database, { useNewUrlParser: true }, (err) => {
  console.log(err)
});
console.log(`Connect ${config.database}`)
module.exports = mongoose;

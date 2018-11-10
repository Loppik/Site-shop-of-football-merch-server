const mongoose = require('mongoose');
const config = require('../config');

mongoose.Promise = Promise;
mongoose.set('debug', config.debug);

console.log('mongodb://' + config.database);

mongoose.connect('mongodb://' + config.database, (err) => {
    
});
module.exports = mongoose;

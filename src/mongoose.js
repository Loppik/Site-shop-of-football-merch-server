const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/sportwear', (err) => {
    
});
module.exports = mongoose;

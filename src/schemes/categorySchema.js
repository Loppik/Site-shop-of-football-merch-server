const mongoose = require('../mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    routeName: String
}, {
    timestamps: false
});

const Category = mongoose.model('category', categorySchema);
module.exports = Category;
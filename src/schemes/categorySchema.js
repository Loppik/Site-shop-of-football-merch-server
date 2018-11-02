const mongoose = require('../mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    routeName: String
}, {
    timestamps: true
});

const Category = mongoose.model('category', categorySchema);
module.exports = Category;
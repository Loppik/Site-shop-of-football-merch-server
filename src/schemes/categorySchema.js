const mongoose = require('../mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, unique: true },
    routeName: { type: String, unique: true }
}, {
    timestamps: false
});

const Category = mongoose.model('category', categorySchema);
module.exports = Category;
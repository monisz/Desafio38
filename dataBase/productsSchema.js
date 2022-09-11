const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    code: {type: String, require: true},
    thumbnail: {type: String, require: true},
    price: {type: Number, require: true},
    stock: {type: Number, require: true},
    timestamp: {type: Date, require: true},
    id: {type: Number, require: true}
});

const Product = mongoose.model("product", productsSchema);

module.exports = Product;
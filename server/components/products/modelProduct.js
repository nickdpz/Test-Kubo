const { Schema, model } = require('mongoose');


const productSchema = new Schema({
    name: { type: String, required: true },
    shortDescription: { type: String, required: true },
    price: { type: Number, required: true },
    cover: { type: String, required: true },
});

module.exports = model('Product', productSchema);
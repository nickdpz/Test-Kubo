const { Schema, model } = require('mongoose');


const buySchema = new Schema({
    user:{
        type: Schema.ObjectId,
        ref: 'User',
    },
    product: [{
        type: Schema.ObjectId,
        ref: 'Product',
    }],
    productCount: [{ type: Number }]

});

module.exports = model('Buy', buySchema);
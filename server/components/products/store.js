const Model = require('./modelProduct');

const getProduct = async (id) => {
    const product = await Model.findOne({ _id: id })
    return product
}

const addProduct = async (newNode) => {
    const myProduct= new Model(newNode);
    const add = await myProduct.save();
    return add
}

module.exports = {
    getProduct,
    addProduct
}

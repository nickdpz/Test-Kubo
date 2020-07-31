const Model = require('./modelProduct');

const getProduct = async (id) => {
    const product = await Model.findOne({ _id: id })
    return product
}

const getProducts = async (id) => {
    const product = await Model.find()
    return product
}

const addProduct = async (newNode) => {
    const myProduct= new Model(newNode);
    const add = await myProduct.save();
    return add
}

module.exports = {
    getProduct,
    getProducts,
    addProduct
}

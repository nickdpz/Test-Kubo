const storeProduct = require('./store');

const getProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        storeProduct.getProduct(id)
            .then((messages) => {
                resolve(messages)
            })
            .catch(e => {
                reject(e)
            })
    })
}

const addProduct = (cover, name, shortDescription, price) => {
    return new Promise(async (resolve, reject) => {
        storeProduct.addProduct({ cover, name, shortDescription, price })
            .then((messages) => {
                resolve(messages)
            })
            .catch(e => {
                reject(e)
            })
    })
}



module.exports = { getProduct, addProduct }
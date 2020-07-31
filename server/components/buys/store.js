const Model = require('./modelBuy');

const addBuy = async (userId, product, content) => {
    const myBuy = new Model({ user: userId, product: product, productCount: content })
    const res = await myBuy.save();
    return res
}

const getBuysByUser = async (query) => {
    const buys = await Model.find(query)
    return buys
}

module.exports = {
    addBuy,
    getBuysByUser,
}

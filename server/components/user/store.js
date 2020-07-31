const Model = require('./modelUser');

const addUser = async (newUser) => {
    const myUser = new Model(newUser)
    const addUser = myUser.save()
    return addUser;
}

const getUser = async (name) => {
    const users = await Model.findOne({ name })
    return users
}

const updateBuyUser = async (id, buyId) => {
    const found = await Model.findOne({ _id: id });
    console.log(found);
    found.buy.push(buyId) ;
    await found.save()
}

module.exports = {
    addUser,
    getUser,
    updateBuyUser
}

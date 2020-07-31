const storeUser = require('../user/store');
const storeProducts = require('../products/store');
const storeBuy = require('./store');

const addBuy = (product, productCount, name, email, phone) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newUser = {
                'name': name,
                'email': email,
                'phone': phone
            }
            console.log(product);
            console.log(productCount);
            const userId = await storeUser.addUser(newUser);
            await storeBuy.addBuy(userId._id, product, productCount);
            resolve(userId._id);
        } catch (e) {
            reject(e);
        }
    })
}

const getBuy = (userId) => {
    return new Promise(async (resolve, reject) => {
        let filter;
        if(userId){
            filter={user:userId}
        }else{
            filter={}
        }
        storeBuy.getBuysByUser(filter)
            .then((messages) => {
                resolve(messages)
            })
            .catch(e => {
                reject(e)
            })
    })
}

module.exports = { addBuy, getBuy }
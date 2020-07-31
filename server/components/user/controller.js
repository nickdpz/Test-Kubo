const storeUser = require('./store');

const getUsers = (name) => {
    return new Promise(async (resolve, reject) => {
        storeUser.listUsers(name)
            .then((messages) => {
                resolve(messages)
            })
            .catch(e => {
                reject(e)
            })
    })
}


module.exports = { getUsers }
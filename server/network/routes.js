const express = require('express');
const user = require('../components/user/network')
const product = require('../components/products/network')
const buys = require('../components/buys/network')

const routes = (server)=>{
    server.use('/user',user)
    server.use('/product', product)
    server.use('/buy', buys)
}

module.exports = routes
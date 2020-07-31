const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.post('/', async (req, res) => {
    const { product, productCount, name, email, phone } = req.body;
    controller.addBuy(product, productCount, name, email, phone)
        .then((info) => {
            response.success(req, res, info, 201)
        })
        .catch((e) => {
            response.error(req, res, 'Información Invalida', 300, e);
        })
})

router.get('/', async (req, res) => {
    const { user } = req.query;
    controller.getBuy(user)
        .then((info) => {
            response.success(req, res, info, 201)
        })
        .catch((e) => {
            response.error(req, res, 'Información Invalida', 300, e);
        })
})


module.exports = router;
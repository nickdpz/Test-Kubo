const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.post('/', async (req, res) => {
    const { cover, name, shortDescription, price } = req.body;
    controller.addProduct(cover, name, shortDescription, price)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((e) => {
            response.error(req, res, 'Error Interno', 500)
        })
})


router.get('/', (req, res) => {
    controller.getProducts(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((e) => {
            response.error(req, res, 'Error Interno', 500)
        })

})

router.get('/:id', (req, res) => {
    controller.getProduct(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((e) => {
            response.error(req, res, 'Error Interno', 500)
        })

})


module.exports = router;
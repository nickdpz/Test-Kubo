const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.post('/', async (req, res) => {

})


router.get('/', async (req, res) => {
    const { name } = req.query;
    controller.getUser(name)
        .then((info) => {
            response.success(req, res, info, 201)
        })
        .catch((e) => {
            response.error(req, res, 'Información Invalida', 300, e);
        })
})


module.exports = router;
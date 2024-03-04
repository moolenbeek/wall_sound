const express = require('express');
const router = express.Router();


module.exports = ({getProducts, getProduct}) => {

    router.get('/', (req, res) => {
        getProducts()
            .then(products => res.json(products))
            .catch((err) => res.json({ error: err.message }));
    })

    router.get('/:id', (req, res) => {
        getProduct(req.params.id)
            .then(product => res.json(product))
            .catch((err) => res.json({ error: err.message }));
    })

    return router
}
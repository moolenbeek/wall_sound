const express = require('express');
const router = express.Router();


module.exports = ({getProducts, getProduct, getProductsByCategory}) => {

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

    router.get('/:category', (req, res) => {
        getProductsByCategory(req.params.category)
            .then(product_by_category => res.json(product_by_category))
            .catch((err) => res.json({ error: err.message }));
    })

    return router
}
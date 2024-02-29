const express = require('express');
const router = express.Router();


module.exports = ({getProducts}) => {

    router.get('/', (req, res) => {
        getProducts()
            .then(products => res.json(products))
            .catch((err) => res.json({ error: err.message }));
    })

    return router
}
var express = require('express');
var router = express.Router();


module.exports = ({getProductCategories}) => {

    router.get('/', (req, res) => {
        getProductCategories()
            .then(product_categories => res.json(product_categories))
            .catch((err) => res.json({ error: err.message }));
    })

    return router
}

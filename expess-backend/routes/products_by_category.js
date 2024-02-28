var express = require('express');
var router = express.Router();


module.exports = ({getProductsByCategory}) => {

    router.get('/:category', (req, res) => {
        getProductsByCategory(req.params.category)
            .then(product_by_category => res.json(product_by_category))
            .catch((err) => res.json({ error: err.message }));
    })

    return router
}


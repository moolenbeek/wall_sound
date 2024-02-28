var express = require('express');
var router = express.Router();


module.exports = ({getProductByCategory}) => {

    router.get('/:category', (req, res) => {
        getProductByCategory(req.params.category)
            .then(product_by_category => res.json(product_by_category))
            .catch((err) => res.json({ error: err.message }));
    })

    return router
}


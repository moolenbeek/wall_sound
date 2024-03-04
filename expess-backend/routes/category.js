const express = require('express');
const router = express.Router();


module.exports = ({getCategories, getCategory}) => {

    router.get('/', (req, res) => {
        getCategories()
            .then(categories => res.json(categories))
            .catch((err) => res.json({ error: err.message }));
    })

    router.get('/:id', (req, res) => {
        getCategory(req.params.id)
            .then(category => res.json(category))
            .catch((err) => res.json({ error: err.message }));
    })

    return router
}
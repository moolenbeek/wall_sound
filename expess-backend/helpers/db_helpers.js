module.exports = (db) => {
    
    const getProducts = () => {
        
        const query = {
            text:'SELECT * FROM product;'
        }

        return db
            .query(query)
            .then(result => result.rows)
            .catch(err => err)
    }

    const getProductCategories = () => {
        
        const query = {
            text:'SELECT * FROM product_category;'
        }

        return db
            .query(query)
            .then(result => result.rows)
            .catch(err => err)
    }

    const getProductsByCategory = (category) => {
        
        const query = {
            text:`SELECT * FROM product WHERE category_id = $1`,
            values: [category]
        }

        return db
            .query(query)
            .then(result => result.rows)
            .catch(err => err)
    }

    return {
        getProducts,
        getProductsByCategory,
        getProductCategories
    }
}
module.exports = (db) => {
    
    // ----------------- Products ----------------- //

    // get all products

    const getProducts = () => {
        
        const query = {
            text:'SELECT * FROM product;'
        }

        return db
            .query(query)
            .then(result => result.rows)
            .catch(err => err)
    }

    // get a product by its id

    const getProduct = (productId) => {
        
        const query = {
            text:`SELECT * FROM product WHERE id = $1`,
            values: [productId]
        }

        return db
            .query(query)
            .then(result => result.rows)
            .catch(err => err)
    }

    // get products by category id

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

    // -------------------------------------------- //

    // ---------------- Categories ---------------- //

    // get all categories

    const getProductCategories = () => {
        
        const query = {
            text:'SELECT * FROM product_category;'
        }

        return db
            .query(query)
            .then(result => result.rows)
            .catch(err => err)
    }

    // -------------------------------------------- //

    return {
        getProducts,
        getProduct,
        getProductsByCategory,
        getProductCategories
    }
}
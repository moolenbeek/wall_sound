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

    // -------------------------------------------- //

    // ---------------- Categories ---------------- //

    // get all categories

    const getCategories = () => {
        
        const query = {
            text:'SELECT * FROM category;'
        }

        return db
            .query(query)
            .then(result => result.rows)
            .catch(err => err)
    }

    // get a category by its id

    const getCategory = (categoryId) => {
        
        const query = {
            text:`SELECT * FROM category WHERE id = $1`,
            values: [categoryId]
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
        getCategories,
        getCategory
    }
}
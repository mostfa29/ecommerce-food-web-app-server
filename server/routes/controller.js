const pool = require('../database/databasepg')
const queries= require ("../database/queries")

//products 
const getProducts = (req, res) => {
    pool.query(queries.get_inventory_products, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
   })
}

const getProductById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.get_product_by_id,[id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}


const addProduct = (req, res) => {
    const {name,type,price,unit,picture,description} = req.body
    pool.query(queries.add_new_product, [name,type,price,unit,picture,description], (error, results) => {
        if (error) throw error;
        res.status(201).send('Product Created Successful')
    })
}


const updateProduct = (req, res) => {
    const id = parseInt(req.params.id)

    const {name,type,price,unit,picture,description} = req.body


     pool.query(queries.get_product_by_id, [id], (error, results) => {
        const noProductFound = !results.rows.length
        if (noProductFound) {
         res.status(400).send("Product  does not exist in the database")
         }
    
         if (!noProductFound) {
             pool.query(queries.update_product, [id,name,type,price,unit,picture,description], (error, results) => {
                 if (error) throw error;
                 res.status(200).send('product updated succefully')
             })
         }
 
    })
}

const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.get_product_by_id, [id], (error, results) => {
        const noProductFound = !results.rows.length
        if (noProductFound) {
         res.send("Product  does not exist in the database")
        }

        if (!noProductFound) {
            pool.query(queries.delete_product, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send('Product Deleted Successful')
    

            })
        }
    })

    
    

}




//users

const getUsers = (req, res) => {
    pool.query(queries.get_inventory_products, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
   })
}

const getAdmins = (req, res) => {
    pool.query(queries.get_inventory_products, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
   })
}

const getCustomers = (req, res) => {
    pool.query(queries.get_inventory_products, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
   })
}

const getUserByEmail = (req,res) => {
    pool.query(queries.get_product_by_id, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const addAdmin = (req, res) => {
    pool.query(queries.add_new_product  , (error, results) => {
        if (error) throw error;
        res.status(400)
    })
}

const addCustomer = (req, res) => {
    pool.query(queries.add_new_product  , (error, results) => {
        if (error) throw error;
        res.status(400)
    })
}



const resetPassword = (req,res) => {
    pool.query(queries.update_product, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const deleteUser = (req,res) => {
    pool.query(queries.get_product_by_id, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}




const getSales = (req, res) => {
    console.log("gettting sales")
}

const currentCommandes = (req, res) => {
    console.log("gettting current commnades")
}

module.exports = {
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    addProduct
}
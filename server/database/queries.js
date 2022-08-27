const get_table_size = (table_name)=> `SELECT COUNT(*)+1 from ${table_name};`
// const get_table_size = ()=> `SELECT COUNT(*)+1 from products;`

const get_inventory_products = "SELECT * FROM products"
const get_product_by_id = `SELECT * from products where id=$1`
const add_new_product =`  insert into products (name,type,price,unit,picture,description) values($1,$2,$3,$4,$5,$6)`
const update_product = `UPDATE products set name=$2   where id=$1`
const delete_product = `delete  from products where id=$1`





module.exports = {
    get_inventory_products,
    add_new_product,
    get_product_by_id,
    delete_product,
    update_product
}
 import Product from "../../model/products/Products.js"
 import Category from "../../model/category/Category.js"

 const getAll = async () => {
    const products = await Product.findAll({
        include: Category
    })
    return products
 }

 export default getAll;
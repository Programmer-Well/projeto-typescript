import Product from "../../model/products/Products.js";

const remove = async (id) => {
    const product = await Product.destroy({
        where: {
            id
        }
    })
    if (!product){
        return false
    }
    return product
}

export default remove;
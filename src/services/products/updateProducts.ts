import Product from "../../model/products/Products.js";

const update = async (data, id) => {
    const qtd = await Product.update(data,{
        where: {
            id
        }
    })

    if(qtd ==0){
        return false
    }

    const product = await Product.findByPk(id)
    return product
}

export default update;
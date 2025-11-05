import Product from "../Model/Products/Products";
import ProductsModelInterface from "../Model/Products/Interface/ProductsModelInterface";

const findAll = async (): Promise<ProductsModelInterface[]> => {
    try {
        const products = await Product.findAll()
        return products
    } catch (error: any) {
        throw new Error(error);
    }
}

const create = async (product: Partial<ProductsModelInterface>): Promise<ProductsModelInterface> =>{
    try{ 
        const newProducts = await Product.create(product)
        return newProducts
    } catch (error: any) {
        throw new Error(error);
    }
}

export default {
    findAll,
    create
}
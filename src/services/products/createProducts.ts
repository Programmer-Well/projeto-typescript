import productRepository from "../../repositorys/productRepository";
import ProductsModelInterface from "../../Model/Products/Interface/ProductsModelInterface"

const createProducts = async (product: Partial<ProductsModelInterface>): Promise<ProductsModelInterface | null> => {
    try{
        const newProducts = await productRepository.create(product)
        return newProducts
    } catch (error: any) {
        throw new Error(error);
    } 
}

export default createProducts

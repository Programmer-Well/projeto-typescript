import productRepository from "../../repositorys/productRepository";
import ProductsModelInterface from "../../Model/Products/Interface/ProductsModelInterface";

const getAllProducts = async (): Promise<ProductsModelInterface[]> => {
    return productRepository.findAll()
}

export default getAllProducts
import Model from "../../Model";

const create = async (productData) => {
    const { name, value, description, status, categoryId } = productData;
    const categoryExists = await Model.Category.findByPk(categoryId);
    
    if (!categoryExists) {
       
        throw new Error("Categoria não encontrada. Não é possível criar o produto.");
    }

    const newProduct = await Model.Product.create({
        name,
        value,
        description,
        status,
        categoryId 
    });

    return newProduct;
};

export default create;
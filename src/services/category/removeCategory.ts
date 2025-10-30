import Category from "../../model/category/Category.js";

const remove = async (id) => {
    const category = await Category.destroy({
        where: {
            id
        }
    })

    if(!category){
        return false
    }
    return category

}

export default remove;

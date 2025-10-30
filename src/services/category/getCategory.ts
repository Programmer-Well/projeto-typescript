import Model from "../../model/index.js";

const getOne = async (id) => {
    try {
        const category = await Model.Category.findOne({
            where: {
                id: id,
            },
        });

        if (!category) {
            return false;
        }

        return category;
        
    } catch (error) {
        throw new Error(error.message);
    }
}

export default getOne;
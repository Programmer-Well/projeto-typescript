import Model from "../../Model";

const creatorCategory = async (category: { name: any; description: any; }) => {
    try{
        const create = await Model.Category.create({
            name: category.name,
            description: category.description
        })

        if (!create){
            return false;
        }
        return create
    } catch (error) {
        return false
    }
}

export default creatorCategory;
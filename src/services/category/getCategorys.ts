import Category from "../../model/category/Category.js"

async function getAll(req, res) {
    const categorys = await Category.findAll()
    return categorys
}

export default getAll
import User from "../../model/users/Users.js"

async function getAll(req, res){
    const users = await User.findAll()
    return users
}

export default getAll
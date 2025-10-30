import User from "../../model/users/Users.js"

const update = async(data,id) => {
    const qtd = await User.update(data, {
        where: {
            id
        }
    })

    if(!qtd){
        return false
    }

    const user = await User.findByPk(id)
    return user
}

export default update
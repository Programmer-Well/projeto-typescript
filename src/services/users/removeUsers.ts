import User from "../../model/users/Users.js"

const remove = async (id) => {
    const user = await User.destroy({
        where:{
            id
        }
    })
    
    if(!user){
        return false
    }
    return user
}
export default remove
import User from "../Model/User/User";
import UserModelInterface from "../Model/User/Interface/UserModelInterface";



const create = async (user: Partial<UserModelInterface>): Promise<UserModelInterface> => {
    try {
        const newUser = await User.create(user)
        return newUser
    } catch (error: any) {
        throw new Error(error);
    }
}

export default {
    create,
}
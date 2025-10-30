import User from "../Model/User/User";
import UserModelInterface from "../Model/User/Interface/UserModelInterface";

const finOne = async (id: number): Promise<UserModelInterface | null> => {
    try {

        const user = await User.findOne({
            where: {
                id
            }
        })
        return user

    } catch (error: any) {
        throw new Error(error);
    }
}

const findAll = async (): Promise<UserModelInterface[]> => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error: any) {
        throw new Error(error);
    }
}

const create = async (user: Partial<UserModelInterface>): Promise<UserModelInterface> => {
    try {
        const newUser = await User.create(user)
        return newUser
    } catch (error: any) {
        throw new Error(error);
    }
}

const update = async (user: Partial<UserModelInterface>, id: number) => {
    try {
        const updateUser = await User.update(user, {
            where: {
                id
            }
        })

        if (updateUser[0] ==0){
            return false
        }

    } catch (error: any) {
        throw new Error(error);
    }
}

const remove = async (id: number) => {
    try {

        const user = await User.destroy({
            where: {
                id
            }
        })

        if (!user) {
            return false
        }

    } catch (error: any) {
        throw new Error(error);
    }
}

export default {
    finOne,
    findAll,
    create,
    update,
    remove,
}
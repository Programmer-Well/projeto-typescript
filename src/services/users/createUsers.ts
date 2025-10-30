import UserModelInterface from '../../Model/User/Interface/UserModelInterface'
import userRepository from '../../repositorys/userRepository'
import bcrypt from 'bcrypt'
import ValidPayloadUserInterface from '../../Model/User/Interface/ValidPayloadUserInterface'

const validPayload = (user: ValidPayloadUserInterface): boolean => {
    if (!user.email || !user.name || !user.password) {
        return false
    }

    return true
}

const create = async (user: Partial<UserModelInterface>): Promise<UserModelInterface | null> => {

    try {
        if (!user.password) {
            return null
        }

        user.password = await bcrypt.hash(user.password, 10)

        const userNew = await userRepository.create(user)

        return userNew
    } catch (error: any) {
        throw new Error(error);
    }
}

const userExist = async (id: number): Promise<boolean> => {
    const user = await userRepository.finOne(id)

    if (user) {
        return true
    }

    return false
}


export default {

    validPayload,
    create,
    userExist,
}
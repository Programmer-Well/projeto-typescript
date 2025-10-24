import UserModelInterface from '../../Model/User/Interface/UserModelInterface'
import userRepository from '../../repositorys/userRepository'
import bcrypt from 'bcrypt'
import crypto from 'crypto'

const create = async (user: Partial<UserModelInterface>): Promise<UserModelInterface | null> => {

    try {
        if (!user.password) {
            return null
        }

        const hash = await bcrypt.hash(user.password, 10)

        const now = Date.now().toString()

        const token = crypto.createHash("md5").update(now).digest("hex")

        const userCreate = await userRepository.create({
            name: user.name,
            email: user.email,
            password: hash,
            token: token
        })

        return userCreate
    } catch (error: any) {
        throw new Error(error);
    }
}

export default create
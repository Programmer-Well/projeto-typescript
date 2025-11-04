import userRepository from "../../repositorys/userRepository"
import UserModelInterface from "../../Model/User/Interface/UserModelInterface"

const updateUsersService = async (user: Partial<UserModelInterface>, id: number) => {

    try {
        return await userRepository.update(user, id)

    } catch (erro: any) {
        throw new Error(erro);
    }
}

export default updateUsersService
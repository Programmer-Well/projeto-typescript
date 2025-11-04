import userRepository from "../../repositorys/userRepository";
import UserModelInterface from "../../Model/User/Interface/UserModelInterface";

const getOneUsers = async (id: number): Promise<UserModelInterface | null> => {

    try {
        const user = await userRepository.finOne(id)
        return user;
    } catch (error: any) {
        throw new Error(error);
    }

};

export default getOneUsers
import userRepository from "../../repositorys/userRepository";
import UserModelInterface from "../../Model/User/Interface/UserModelInterface";

const getOne = async (id: number): Promise<UserModelInterface | null> => {

    try {
        const user = await userRepository.finOne(id)
        return user;
    } catch (error: any) {
        throw new Error(error);
    }

};

export default getOne
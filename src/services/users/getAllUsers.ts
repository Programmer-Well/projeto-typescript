import userRepository from "../../repositorys/userRepository";
import UserModelInterface from "../../Model/User/Interface/UserModelInterface";

const getAll = async (): Promise<UserModelInterface[]> => {

    return userRepository.findAll()

};

export default getAll
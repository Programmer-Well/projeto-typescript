import Modal from "../../model/index.js"

const getOne = async (id) => {
    try {
        const user = await Modal.User.findOne({
            where: {
                id: id,
            },
        });

        if (!user) {
            return false;
        }

        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default getOne
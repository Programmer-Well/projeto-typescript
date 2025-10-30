import Model from "../../Model";
const getOne = async (id) => {
    try {
        const user = await Model.User.findOne({
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
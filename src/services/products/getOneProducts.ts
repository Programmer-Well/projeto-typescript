import Model from "../../model/index.js"

const getOne = async (id) => {
    try {
    const product = await Model.Product.findOne({
      where: {
        id: id,
      },
    });

    if (!product) {
      return false;
    }

    return product;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default getOne;
import create from "../../services/products/createProducts.js"
import getAll from "../../services/products/getAllProducts.js";
import getOne from "../../services/products/getOneProducts.js";
import remove from "../../services/products/removeProducts.js";
import update from "../../services/products/updateProducts.js";

async function getProduct(req, res) {
    try {
        const id = req.params.id;

        if (!id) {
            res.status(400);
            res.json({
                message: "id é obrigatório",
            });
            return;
        }

        const product = await getOne(id)

        if (!product) {
            res.status(404);
            res.json({
                message: "Produto não encontrado",
            });
            return;
        }

        res.status(200);

        res.json({
            data: product
        });

    } catch (error) {
        console.log(error);
        res.status(500);
        res.json({
            message: "ocorreu um erro",
        });
    }
}

async function getProducts(req, res) {

    const products = await getAll()
    res.status(200)
    res.json({
        data: products
    });
}


const createProducts = async (req, res) => {
    try {

        const productData = req.body;


        if (!productData.name || !productData.value || !productData.categoryId) {
            return res.status(400).json({ message: "Nome, valor e categoryId são obrigatórios." });
        }

        const newProduct = await create(productData);

        return res.status(201).json(newProduct);

    } catch (error) {

        console.error("Erro ao criar produto:", error.message);
        return res.status(404).json({ message: error.message });
    }
};

async function updateProducts(req, res) {
    const data = req.body
    const id = req.params.id

    const product = await update(data, id)

    if (!product) {
        res.status(400)
        res.json({
            message: "Não foi possivel atualizar."
        })
        return
    }

    res.status(200)
    res.json({
        message: "Atualizado com sucesso!",
        product
    })
}

const removeProducts = async (req, res) => {
    const id = req.params.id
    const product = await remove(id)

    if (!product) {
        res.status(400)
        res.json({
            message: "Erro na operação"
        })
        return
    }

    res.status(200)
    res.json({
        message: "Deletado com sucesso",
        product
    })
}

export default {
    getProduct,
    getProducts,
    createProducts,
    removeProducts,
    updateProducts,
}
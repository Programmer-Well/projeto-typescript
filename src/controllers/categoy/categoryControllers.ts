import getOne from "../../services/category/getCategory.js";
import getAll from "../../services/category/getCategorys.js";
import create from "../../services/category/createCategory.js"
import remove from "../../services/category/removeCategory.js";

async function getCategory(req, res) {
    try {
        const id = req.params.id;

        if (!id) {
            res.status(400);
            res.json({
                message: "id é obrigatório",
            });
            return;
        }

        const category = await getOne(id)

        if (!category) {
            res.status(404);
            res.json({
                message: "Categoria não encontrado",
            });
            return;
        }
        res.status(200);

        res.json({
            data: category
        });

    } catch (error) {
        console.log(error);
        res.status(500);
        res.json({
            message: "ocorreu um erro",
        });
    }
}

async function getCategorys(req, res) {
    const categorys = await getAll()
    res.status(200)
    res.json({
        data: categorys
    });
}

const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        if (!name || !description) {
            res.status(400);
            res.json({
                message: "Nome e Descrição são obrigatórios",
            });
            return;
        }

        const createCategory = await create(req.body);

        if (!createCategory) {
            res.status(400);
            res.json({
                message: "Erro ao criar a categoria.",
            });
            return;
        }

        res.status(201);
        res.json({
            data: createCategory,
        });
    } catch (error) {
        console.log(error);
        res.status(500);
        res.json({
            message: "ocorreu um erro",
        });
    }
}

async function removeCategory(req, res) {
    const id = req.params.id

    const category = await remove(id)

    if (!category) {
        res.status(400)
        res.json({
            message: "Erro na operação"
        })
        return
    }

    res.status(200)
    res.json({
        message: "Deletado com sucesso",
        category
    })
}

export default {
    getCategory,
    getCategorys,
    createCategory,
    removeCategory,
}
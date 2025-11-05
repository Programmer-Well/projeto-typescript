import { Request, Response } from "express";
import getAllProducts from "../../services/products/getAllProducts";
import createProducts from "../../services/products/createProducts";

const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await getAllProducts()

        res.status(200).json(products)
    } catch (error) {
        res.status(500)
        res.json({
            message: "Ocorreu um erro tente novamente mais tarde"
        })
    }
}

const getProduct = async (req: Request, res: Response): Promise<void> => {
}

const createProducts = async (req: Request, res: Response): Promise<void> => {
    try{ 

    const newUser = await createProducts(req.body)
    
            if (!newUser) {
                res.status(500)
                res.json({
                    message: "Não foi possivel criar"
                })
                return
            }
    
            res.json({
                message: "usuário criado com sucesso"
            })
        } catch (error) {
            res.status(500)
            res.json({
                message: "Ocorreu um erro tente novamente mais tarde"
            })
        }
}

const updateProducts = async (req: Request, res: Response): Promise<void> => {
}

const removeProducts = async (req: Request, res: Response): Promise<void> => {
}

export default {
    getProduct,
    getProducts,
    createProducts,
    updateProducts,
    removeProducts,
}
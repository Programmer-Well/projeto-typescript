import { Request, Response } from 'express'
import createUsers from '../../services/users/createUsers'
import auth from '../../services/users/auth'

async function getUsers() {

}

const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const validPayload = createUsers.validPayload(req.body)

        if (!validPayload) {
            res.status(400)
            res.json({
                message: "Email, password and name is required"
            })
            return
        }

        const userExist = await createUsers.userExist(req.body.id)

        if (userExist) {
            res.status(400)
            res.json({
                message: "Usuario com esse ID já existe."
            })
            return
        }

        const newUser = await createUsers.create(req.body)

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
const getUser = async (req: Request, res: Response): Promise<void> => {

}

async function updateUsers() {

}

async function removeUsers() {


}

const authUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const validPayload = auth.validPayload(req.body)

        if (!validPayload) {
            res.status(400)
            res.json({
                message: "Email and password is required"
            })
            return
        }
        const user = await auth.auth(req.body.email, req.body.password)

        if (!user) {
            res.status(400)
            res.json({
                message: "Email ou senha inválidos"
            })
            return
        }

        const token = auth.createToken(user)

        if (!token) {
            res.status(500)
            res.json({
                message: "Houve um erro ao gerar o token"
            })
            return
        }

        res.json(token)
    } catch (error) {
        res.status(500)
        res.json({
            message: "Ocorreu um erro tente novamente mais tarde"
        })
    }
}

export default {
    getUser,
    getUsers,
    createUser,
    updateUsers,
    removeUsers,
    authUser,
}
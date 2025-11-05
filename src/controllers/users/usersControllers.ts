import { Request, Response } from 'express'
import getOneUsers from '../../services/users/getOneUsers'
import getAllUsers from '../../services/users/getAllUsers'
import createUsers from '../../services/users/createUsers'
import destroyUserService from '../../services/users/removeUsers'
import updateUsersService from '../../services/users/updateUsersService'
import auth from '../../services/users/auth'


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

        const userExist = await createUsers.userExist(req.body.email)

        if (userExist) {
            res.status(400)
            res.json({
                message: "Usuario com esse E-MAIL já existe."
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

const getUser = async (req: Request, res: Response): Promise<Response> => {

    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id)) {
            return res.status(400).json({ message: "ID inválido. Deve ser um número." });
        }

        const user = await getOneUsers(id);

        if (!user) {

            return res.status(404).json({ message: "Usuário não encontrado." });
        }

        return res.status(200).json(user);

    } catch (error: any) {

        console.error("Erro no controller ao buscar usuário:", error);
        return res.status(500).json({ message: "Ocorreu um erro interno. Tente novamente mais tarde." });
    }
}

const getUsers = async (req: Request, res: Response): Promise<void> => {

    try {
        const users = await getAllUsers()

        res.status(200).json(users)
    } catch (error) {
        res.status(500)
        res.json({
            message: "Ocorreu um erro tente novamente mais tarde"
        })
    }

}

const updateUsers = async (req: Request, res: Response): Promise<void> => {
    /* try {
        const updated = await updateUsersService(req.body, req.user.id)

        if (!updated) {
            res.status(400)
            res.json({
                message: "Não foi possivel atualizar o usuário"
            })
            return
        }

        res.status(200)
        res.json({
            message: "Usuário atualizado com sucesso"
        })

    } catch (error) {
        res.status(500)
        res.json({
            message: "Ocorreu um erro tente novamente mais tarde"
        })
    } */
}

const removeUsers = async (req: Request, res: Response): Promise<void> => {
    /* try {
        const destroyed = await destroyUserService.destroy(req.user.id)
        if (!destroyed) {
            res.status(400)
            res.json({
                message: "Não foi possivel deletar o usuário"
            })
            return
        }

        res.status(200)
        res.json({
            message: "Usuário deletado com sucesso"
        })
    } catch (error: any) {
        res.status(500)
        res.json({
            message: "Ocorreu um erro tente novamente mais tarde"
        })
    } */

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
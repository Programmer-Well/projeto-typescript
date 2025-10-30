import {Request, Response} from 'express'

const getUser = async (req: Request, res: Response): Promise<void> => {
    res.json({
        user: {
            name: req.user.name,
            email: req.user.email,
            id: req.user.id
        }
    })
}

async function getUsers(req, res) {
    const users = await getAll()

    res.status(200)
    res.json({
        data: users
    });
}

const createUser = async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        res.json({
            message: "os campos name, email e password é obrigatorio"
        })
        return
    }

    const user = await create(req.body)

    res.status(201)
    res.json({
        token: user.token
    })
}

async function updateUsers(req, res) {
    const data = req.body
    const id = req.params.id

    const user = await update(data, id)

    if (!user) {
        res.status(400)
        res.json({
            message: "Não foi possivel atualizar"
        })
        return
    }

    res.status(200)
    res.json({
        message: "Atualizado com sucesso",
        user
    })
}

async function removeUsers(req, res) {
    const id = req.params.id

    const user = await remove(id)

    if (!user) {
        res.status(400)
        res.json({
            message: `Usuário ${id} não encontrado!`
        })
        return
    }

    res.status(200)
    res.json({
        message: "Deletado com sucesso",
        user
    })
}

const auth = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400)
        res.json({
            message: "email e senha obrigatorio"
        })
        return
    }

    const user = await login(email, password)

    if (!user) {
        res.status(401)
        res.json({
            message: "email ou senha invalidos"
        })
        return
    }

    res.json({
        message: "login realizado com sucesso",
        token: user.token
    })
}

export default {
    getUser,
    getUsers,
    createUser,
    updateUsers,
    removeUsers,
    auth,
}
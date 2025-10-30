import express from 'express'
import usersControllers from '../../controllers/users/usersControllers'

const routerUsers = express.Router()

routerUsers.get("/users", usersControllers.getUsers)
routerUsers.get("/users/:id", usersControllers.getUser)
routerUsers.post("/users/", usersControllers.createUser)
routerUsers.put("/users/:id", usersControllers.updateUsers)
routerUsers.delete("/users/:id", usersControllers.removeUsers)

export default routerUsers;



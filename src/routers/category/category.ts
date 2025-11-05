import express from 'express'
import categoryControllers from "../../controllers/categoy/categoryControllers.js"
import auth from '../../middleware/auth.js'

const routerCategorys = express.Router()

routerCategorys.get("/categorys", categoryControllers.getCategorys)
routerCategorys.get("/categorys/:id", categoryControllers.getCategory)
routerCategorys.post("/categorys", categoryControllers.createCategory)
routerCategorys.delete("/categorys/:id", categoryControllers.removeCategory)

export default routerCategorys;
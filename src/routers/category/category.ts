import express from 'express'
import categoryControllers from "../../controllers/categoy/categoryControllers.js"
import auth from '../../middleware/auth.ts/index.js'

const routerCategorys = express.Router()

routerCategorys.get("/categorys", auth, categoryControllers.getCategorys)
routerCategorys.get("/categorys/:id", auth, categoryControllers.getCategory)
routerCategorys.post("/categorys", auth, categoryControllers.createCategory)
routerCategorys.delete("/categorys/:id", auth, categoryControllers.removeCategory)

export default routerCategorys;
import express from 'express'
import productsControllers from '../../controllers/products/productsControllers.js'
import auth from "../../middleware/auth.ts/index.js"

const routerProducts = express.Router()

routerProducts.get("/products", auth, productsControllers.getProducts)
routerProducts.get("/products/:id", auth, productsControllers.getProduct)
routerProducts.post("/products", auth, productsControllers.createProducts)
routerProducts.put("/products/:id", auth, productsControllers.updateProducts)
routerProducts.delete("/products/:id", auth, productsControllers.removeProducts)

export default routerProducts;
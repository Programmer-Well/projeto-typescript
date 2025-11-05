import express from 'express'
import productsControllers from '../../controllers/products/productsControllers'

const routerProducts = express.Router()

routerProducts.get("/products", productsControllers.getProducts)
routerProducts.get("/products/:id", productsControllers.getProduct)
routerProducts.post("/products", productsControllers.createProducts)
routerProducts.put("/products/:id", productsControllers.updateProducts)
routerProducts.delete("/products/:id", productsControllers.removeProducts)

export default routerProducts;
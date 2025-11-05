import express, { Router } from 'express'
import orderController from '../../controllers/order/orderController'

const routerOrder: Router = express.Router()

routerOrder.post("/order", orderController.create)

export default routerOrder
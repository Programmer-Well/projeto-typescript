import userRouter from "./routers/users/users"
import routerProducts from "./routers/products/products"
import routerOrder from "./routers/order/order"
import routerCategorys from "./routers/category/category"
import express, { Express } from "express"

const app: Express = express()
app.use(express.json())

app.use(userRouter)
app.use(routerProducts)
app.use(routerOrder)
app.use(routerCategorys)

export default app
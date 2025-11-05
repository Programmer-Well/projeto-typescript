import userRouter from "./routers/users/users"
import routerProducts from "./routers/products/products"

import express, { Express } from "express"

const app: Express = express()
app.use(express.json())

app.use(userRouter)
app.use(routerProducts)

export default app
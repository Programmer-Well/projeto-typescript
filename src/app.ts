import userRouter from "./routers/users/users"

import express, { Express } from "express"

const app: Express = express()
app.use(express.json())
app.use(userRouter)

export default app
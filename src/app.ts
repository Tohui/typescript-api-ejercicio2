    import express from 'express'
    import dotenv from "dotenv"
    import itemsRouter from "./modules/items/items.module"

    dotenv.config()
    const app = express()

    app.use(express.json())
    app.use('/items',itemsRouter)
    export default app;
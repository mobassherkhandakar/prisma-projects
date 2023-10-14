import express, { Application } from 'express'
import cors from 'cors'
import router from './app/routers'

const app: Application = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

app.use('/api/vi/', router)


export default app
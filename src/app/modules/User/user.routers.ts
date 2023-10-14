import express from 'express'
import { userController } from './user.controlar'

const router = express.Router()
router.post('/create-user', userController.insertIntoDB)

export const userRouters = router
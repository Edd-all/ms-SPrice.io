import { Router } from 'express'
import { login, getProdutos } from '../controllers/produtoController.js'

const router = Router()

router.post('/login', login)
router.get('/produtos', getProdutos)

export default router
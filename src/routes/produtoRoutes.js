import { Router } from 'express'
import { getProdutos } from '../controllers/produtoController.js'

const router = Router()

router.get('/produtos', getProdutos)

export default router
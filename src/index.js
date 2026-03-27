import express from 'express'
import cors from 'cors'
import rotas from './routes/produtoRoutes.js'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(rotas)

app.listen(PORT, () => {
  console.log(`✅ API rodando em http://localhost:${PORT}`)
})
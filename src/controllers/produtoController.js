import { buscaMercadoLivreService } from '../services/buscaMercadoLivreService.js'

export async function getProdutos(req, res) {
  const { item, precoMax } = req.query

  try {
    const produtos = await buscaMercadoLivreService(item, precoMax ? Number(precoMax) : null)
    res.json(produtos)
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar produtos.', detalhe: err.message })
  }
}
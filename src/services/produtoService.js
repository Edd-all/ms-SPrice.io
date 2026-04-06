import { mercadoLivreService } from "./mercadoLivreService.js"
import { amazonService } from "./amazonService.js"

export async function produtoService(nomeItem, precoMaximo) {
  const produtosMercadoLivre = await mercadoLivreService(nomeItem, precoMaximo)
  const produtosAmazon = await amazonService(nomeItem, precoMaximo)

  const listaDeProdutos = [produtosMercadoLivre, produtosAmazon]

  return listaDeProdutos
}
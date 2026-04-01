import { mercadoLivreService } from "./mercadoLivreService.js"

export async function produtoService(nomeItem, precoMaximo) {
  const produtosMercadoLivre = await mercadoLivreService(nomeItem, precoMaximo)

  return produtosMercadoLivre
}
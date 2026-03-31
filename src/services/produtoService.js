import { buscaMercadoLivreService } from "./buscaMercadoLivreService.js"

export async function produtoService(nomeItem, precoMaximo) {

  const produtosMercadoLivre = await buscaMercadoLivreService(nomeItem, precoMaximo)

  return produtosMercadoLivre
}
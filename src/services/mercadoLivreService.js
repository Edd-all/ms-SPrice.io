import { Produto } from "../models/produto.js"
import { mercadoLivreScraper } from "../scrapers/mercadoLivreScraper.js"
import { Origem } from "../enums/origem.js"

export async function mercadoLivreService(nomeItem, precoMaximo) {
  const resultadoDaPesquisa = await mercadoLivreScraper(nomeItem)

  const listaProdutos = resultadoDaPesquisa.map(item =>
    new Produto(item.nome, item.preco, item.link, item.origem = Origem.MERCADO_LIVRE)
  )
  const produtosFiltrados = precoMaximo
    ? listaProdutos.filter(produto => produto.preco <= precoMaximo)
    : listaProdutos

  //apenas para print
  console.log("Produtos encontrados:")
  produtosFiltrados.forEach(produto => {
    console.log(produto.toString())
  })

  return produtosFiltrados
}
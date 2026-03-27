import { iniciarNavegador } from "../config/navegador.js"
import { Produto } from "../model/produto.js"
import { mercadoLivreScraper } from "../scrapers/mercadoLivreScraper.js"

export async function buscaMercadoLivreService(nomeItem, precoMaximo) {
  const { browser, page } = await iniciarNavegador()

  const resultadoDaPesquisa = await mercadoLivreScraper(page, nomeItem)

  const listaProdutos = resultadoDaPesquisa.map(item =>
    new Produto(item.nome, item.preco, item.link)
  )
  const produtosFiltrados = precoMaximo
    ? listaProdutos.filter(produto => produto.preco <= precoMaximo)
    : listaProdutos

  //apenas para print
  console.log("Produtos encontrados:")
  produtosFiltrados.forEach(produto => {
    console.log(produto.toString())
  })

  await browser.close()

  return produtosFiltrados
}
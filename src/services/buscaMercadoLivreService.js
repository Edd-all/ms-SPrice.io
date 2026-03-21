import { iniciarNavegador } from "../config/navegador.js"
import { Produto } from "../model/produto.js"
import { mercadoLivreScraper } from "../scrapers/mercadoLivreScraper.js"

export async function buscaMercadoLivreService() {

  const { browser, page } = await iniciarNavegador()
  const nomeItemDaPesquisa = 'carro'
  const preceItemDaPesquisa = 200

  const resultadoDaPesquisa = await mercadoLivreScraper(page, nomeItemDaPesquisa)

  const listaProdutos = resultadoDaPesquisa.map(item =>
    new Produto(item.nome, item.preco)
  )
  const produtosFiltrados = listaProdutos.filter(produto => 
    produto.preco <= preceItemDaPesquisa
  )

  console.log("Produtos encontrados:")
  produtosFiltrados.forEach(produto => {
    console.log(produto.toString())
  })

  await browser.close()

  return listaProdutos
}
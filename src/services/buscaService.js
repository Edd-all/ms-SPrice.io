import { iniciarNavegador } from "../config/navegador.js"
import { Produto } from "../model/produto.js"
import { mercadoLivreScraper } from "../scrapers/mercadoLivreScraper.js"

export async function executarBusca() {

  const { browser, page } = await iniciarNavegador()
  const itemDaPesquisa = 'carro'

  const resultadoDaPesquisa = await mercadoLivreScraper(page, itemDaPesquisa)

  const listaProdutos = resultadoDaPesquisa.map(item =>
    new Produto(item.nome, item.preco).toString()
  )

  console.log("Produtos encontrados:")
  console.log(listaProdutos)

  await browser.close()

  return listaProdutos
}
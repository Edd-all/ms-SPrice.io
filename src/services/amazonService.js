import { Produto } from "../models/produto.js"
import { amazonScraper } from "../scrapers/amazonScraper.js"
import { Origem } from "../enums/origem.js"

function parsearPreco(precoStr) {
  if (!precoStr) return null

  const apenasNumeros = precoStr
    .replace(/[R$\s]/g, "")  // remove "R$" e espaços
    .replace(/\./g, "")       // remove separador de milhar
    .replace(",", ".")        // troca vírgula decimal por ponto

  const valor = parseFloat(apenasNumeros)
  return isNaN(valor) ? null : valor
}

export async function amazonService(nomeItem, precoMaximo) {
  const resultadoDaPesquisa = await amazonScraper(nomeItem)

  const listaProdutos = resultadoDaPesquisa.map(item =>
    new Produto(item.nome, parsearPreco(item.preco), item.link, Origem.AMAZON)
  )
  const produtosFiltrados = precoMaximo
    ? listaProdutos.filter(produto => produto.preco <= precoMaximo)
    : listaProdutos

  //apenas para print
  console.log(`\nProdutos encontrados na Amazon: ${produtosFiltrados.length}`)
  produtosFiltrados.forEach(produto => console.log(produto.toString()))

  return produtosFiltrados
}
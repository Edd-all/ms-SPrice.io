import { iniciarNavegador } from "../config/navegador.js"

export async function mercadoLivreScraper(itemDaPesquisa) {
  const { browser, page } = await iniciarNavegador()

  const barraDePesquisa = 'input[class="nav-search-input"]'
  const layoutDoItem = 'li.ui-search-layout__item'
  const seletores = {
    nome: 'h3.poly-component__title-wrapper',
    preco: 'span.andes-money-amount__fraction',
    link: 'a.poly-component__title'
  }

  await page.goto("https://www.mercadolivre.com.br/")
  await page.waitForSelector(barraDePesquisa)
  await page.type(barraDePesquisa, itemDaPesquisa)

  await Promise.all([
    page.keyboard.press("Enter"),
    page.waitForNavigation()
  ])

  await page.waitForSelector(layoutDoItem, { timeout: 15000 })

  const produtos = await page.$$eval(
    layoutDoItem, 
    (items,seletores) =>
    items.map(item => ({
      nome: item.querySelector(seletores.nome)?.innerText,
      preco: item.querySelector(seletores.preco)?.innerText,
      link: item.querySelector(seletores.link)?.href
    })),
    seletores
  )

  await browser.close()

  return produtos
}
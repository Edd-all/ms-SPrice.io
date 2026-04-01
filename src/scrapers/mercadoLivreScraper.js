import { iniciarNavegador } from "../config/navegador.js"

export async function mercadoLivreScraper(itemDaPesquisa) {
  const { browser, page } = await iniciarNavegador()

  const barraDePesquisa = 'input[class="nav-search-input"]'
  const layoutDoItem = 'li.ui-search-layout__item'

  await page.goto("https://www.mercadolivre.com.br/")
  await page.waitForSelector(barraDePesquisa)
  await page.type(barraDePesquisa, itemDaPesquisa)

  await Promise.all([
    page.keyboard.press("Enter"),
    page.waitForNavigation()
  ])

  await page.waitForSelector(layoutDoItem, { timeout: 15000 })

  const produtos = await page.$$eval(layoutDoItem, items =>
    items.map(item => {
      const nome = item.querySelector('h3.poly-component__title-wrapper')?.innerText
      const preco = item.querySelector('span.andes-money-amount__fraction')?.innerText
      const link = item.querySelector('a.poly-component__title')?.href
      return { nome, preco, link }
    })
  )

  await browser.close()

  return produtos
}
import { iniciarNavegador } from "../config/navegador.js"

export async function amazonScraper(itemDaPesquisa) {
  const { browser, page } = await iniciarNavegador()

  const barraDePesquisa = 'input#twotabsearchtextbox'
  const layoutDoItem = '[data-component-type="s-search-result"]'
  const seletores = {
    nome: 'h2.a-size-mini span',
    preco: 'span.a-price span.a-offscreen',
    link: 'h2.a-size-mini a.a-link-normal'
  }

  await page.goto("https://www.amazon.com.br/")
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
      nome: item.querySelector(seletores.nome)?.innerText?.trim(),
      preco: item.querySelector(seletores.preco)?.innerText?.trim(),
      link: item.querySelector(seletores.link)?.href ?? null
    })).filter(p => p.nome),
    seletores
  )

  await browser.close()

  return produtos
}
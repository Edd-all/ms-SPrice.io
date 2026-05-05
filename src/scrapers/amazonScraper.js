import { iniciarNavegador } from "../config/navegador.js"

export async function amazonScraper(itemDaPesquisa) {
  const { browser, page } = await iniciarNavegador()

  const barraDePesquisa = 'input#twotabsearchtextbox'
  const layoutDoItem = '[data-component-type="s-search-result"]'
  const seletores = {
    nome: 'h2 span',
    preco: 'span.a-price span.a-offscreen',
    link: 'a.a-link-normal.s-no-outline'
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
      link: (() => {
        const href = item.querySelector(seletores.link)?.getAttribute('href')
        if (!href) return null
        return href.startsWith('http') ? href : `https://www.amazon.com.br${href}`
      })()
    })).filter(p => p.nome),
    seletores
  )

  await browser.close()

  return produtos
}
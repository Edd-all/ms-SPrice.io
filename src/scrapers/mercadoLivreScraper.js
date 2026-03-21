export async function mercadoLivreScraper(page, itemDaPesquisa) {

  const barraDePesquisa = 'input[class="nav-search-input"]'

  await page.goto("https://www.mercadolivre.com.br/")
  await page.waitForSelector(barraDePesquisa)
  await page.type(barraDePesquisa, itemDaPesquisa)

  await Promise.all([
    page.keyboard.press("Enter"),
    page.waitForNavigation()
  ])

  const produtos = await page.$$eval('li.ui-search-layout__item', items =>
    items.map(item => {
      const nome = item.querySelector('h3.poly-component__title-wrapper')?.innerText
      const preco = item.querySelector('span.andes-money-amount__fraction')?.innerText
      const link = item.querySelector('a.poly-component__title')?.href
      return { nome, preco, link }
    })
  )

  return produtos
}
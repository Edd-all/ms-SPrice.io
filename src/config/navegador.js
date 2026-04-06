import puppeteer from "puppeteer"

//para fins de teste manter headless como false
export async function iniciarNavegador() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });

  const page = await browser.newPage()

  return { browser, page }
}
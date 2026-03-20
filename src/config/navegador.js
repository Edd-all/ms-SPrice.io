import puppeteer from "puppeteer"

export async function iniciarNavegador() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });

  const page = await browser.newPage()

  return { browser, page }
}
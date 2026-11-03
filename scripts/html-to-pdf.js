const fs = require('fs/promises')
const path = require('path')
const { pathToFileURL } = require('url')
const { chromium } = require('playwright')

const projectRoot = path.resolve(__dirname, '..')
const [inputArg = 'cv/index.html', outputArg = 'public/portifolio.pdf', ...extraArgs] = process.argv.slice(2)

if (extraArgs.length > 0) {
  throw new Error('Uso: npm run cv:pdf -- [arquivo.html] [arquivo.pdf]')
}

const inputPath = path.resolve(projectRoot, inputArg)
const outputPath = path.resolve(projectRoot, outputArg)

async function generatePdf() {
  await fs.access(inputPath)
  await fs.mkdir(path.dirname(outputPath), { recursive: true })

  const browser = await chromium.launch({ headless: true })

  try {
    const page = await browser.newPage()
    await page.goto(pathToFileURL(inputPath).href, { waitUntil: 'load' })
    await page.emulateMedia({ media: 'print' })
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false
    })
  } finally {
    await browser.close()
  }

  console.log(`PDF gerado: ${path.relative(projectRoot, outputPath)}`)
}

generatePdf().catch((error) => {
  console.error(`Não foi possível gerar o PDF: ${error.message}`)
  process.exitCode = 1
})

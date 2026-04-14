import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Read raw TS file to extract IDs
const caseStudiesTs = fs.readFileSync(toAbsolute('src/data/caseStudies.ts'), 'utf-8')
const ids = [...caseStudiesTs.matchAll(/^\s*id:\s*['"]([^'"]+)['"],?/gm)].map(m => m[1])

const baseRoutes = [
  '/',
  '/services',
  '/case-studies',
  '/free-audit',
  '/about'
]

const dynamicRoutes = ids.map(id => `/case-studies/${id}`)

const allRoutes = [...baseRoutes, ...dynamicRoutes]

async function build() {
  const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
  const { render } = await import('./dist/server/entry-server.js')
  
  let sitemapEntries = []

  for (const url of allRoutes) {
    const context = {}
    const appHtml = render(url, context)
    
    const helmet = context.helmet
    let helmetString = ''
    if (helmet) {
      helmetString = `
        ${helmet.title.toString()}
        ${helmet.priority.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
      `
    }

    const html = template
      .replace('<!--app-head-->', helmetString)
      .replace('<!--app-html-->', appHtml)

    const filePath = url === '/' 
      ? 'dist/index.html' 
      : `dist${url}/index.html`
      
    const dir = path.dirname(toAbsolute(filePath))
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('Pre-rendered:', filePath)
    
    sitemapEntries.push(`
  <url>
    <loc>https://surgsolutions.com${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`)
  }

  // Generate Sitemap
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('')}
</urlset>`
  
  fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemapXml)
  console.log('Pre-rendered: dist/sitemap.xml')
  
  // Clean up server bundle as it's not needed for production static host
  fs.rmSync(toAbsolute('dist/server'), { recursive: true, force: true })
}

build().catch(e => {
  console.error(e)
  process.exit(1)
})

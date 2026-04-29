import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

function resolveServerEntry() {
  const directEntry = toAbsolute('dist/server/entry-server.js')
  if (fs.existsSync(directEntry)) {
    return directEntry
  }

  const serverDir = toAbsolute('dist/server')
  if (!fs.existsSync(serverDir)) {
    throw new Error('SSR output directory not found: dist/server')
  }

  const candidates = fs.readdirSync(serverDir, { recursive: true })
    .filter((file) => typeof file === 'string' && /^entry-server.*\.js$/.test(path.basename(file)))
    .map((file) => path.join(serverDir, file))
    .sort((a, b) => a.length - b.length)

  if (candidates.length > 0) {
    return candidates[0]
  }

  throw new Error('Could not find an SSR entry bundle in dist/server')
}

// Read raw TS file to extract IDs
const caseStudiesTs = fs.readFileSync(toAbsolute('src/data/caseStudies.ts'), 'utf-8')
const ids = [...caseStudiesTs.matchAll(/^\s*id:\s*['"]([^'"]+)['"],?/gm)].map(m => m[1])

const baseRoutes = [
  '/',
  '/services',
  '/case-studies',
  '/free-audit',
  '/about',
  '/audit',
  '/privacy-policy',
  '/terms'
]

// Funnel sub-pages are pre-rendered for resilience but excluded from sitemap
const funnelSubRoutes = [
  '/audit/apply',
  '/audit/book',
  '/audit/thank-you'
]

const dynamicRoutes = ids.map(id => `/case-studies/${id}`)

const allRoutes = [...baseRoutes, ...dynamicRoutes, ...funnelSubRoutes]

// Only these routes appear in the sitemap
const sitemapRoutes = new Set([...baseRoutes, ...dynamicRoutes])

async function build() {
  const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
  const serverEntry = resolveServerEntry()
  const { render } = await import(pathToFileURL(serverEntry).href)
  
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
    
    if (sitemapRoutes.has(url)) {
      const priority = url === '/' ? '1.0' : url === '/audit' ? '0.7' : (url === '/privacy-policy' || url === '/terms') ? '0.3' : '0.8'
      sitemapEntries.push(`
  <url>
    <loc>https://surgsolutions.online${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url === '/' ? 'weekly' : (url === '/privacy-policy' || url === '/terms') ? 'yearly' : 'monthly'}</changefreq>
    <priority>${priority}</priority>
  </url>`)
    }
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

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, '..')
const cacheDir = path.join(rootDir, '.next', 'cache')
const outDir = path.join(rootDir, 'out')
const distDir = path.join(rootDir, 'dist')

if (fs.existsSync(cacheDir)) {
  fs.rmSync(cacheDir, { recursive: true, force: true })
  console.log('Cleaned up .next/cache directory')
}

if (fs.existsSync(outDir)) {
  fs.rmSync(distDir, { recursive: true, force: true })
  fs.cpSync(outDir, distDir, { recursive: true })
  console.log('Copied static export from out to dist')
}

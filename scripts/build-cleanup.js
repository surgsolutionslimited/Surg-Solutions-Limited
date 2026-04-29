import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cacheDir = path.join(__dirname, '..', '.next', 'cache')

if (fs.existsSync(cacheDir)) {
  fs.rmSync(cacheDir, { recursive: true, force: true })
  console.log('✓ Cleaned up .next/cache directory')
}

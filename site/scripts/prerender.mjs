// Writes static HTML for every route into dist/ so first paint is real content.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, pages } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)

for (const url of Object.keys(pages)) {
  const { html, head, title } = render(url === '*' ? '/404' : url)
  const out = template
    .replace('<!--head-->', head)
    .replace(/<title>.*<\/title>/, `<title>${title}</title>`)
    .replace('<!--app-->', html)
  const file = url === '*' ? '404.html' : path.join(url.slice(1), 'index.html')
  fs.mkdirSync(path.dirname(path.join(dist, file)), { recursive: true })
  fs.writeFileSync(path.join(dist, file), out)
  // also /about.html so hosts that map /about -> about.html (no trailing slash) serve the right page
  if (url !== '/' && url !== '*') fs.writeFileSync(path.join(dist, url.slice(1) + '.html'), out)
  console.log('prerendered', url, '->', file)
}
fs.rmSync('dist-ssr', { recursive: true, force: true })

import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { pages, site } from './data/content'

export { pages }

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
  const meta = pages[url] ?? pages['*']
  const canonical = site.url + (url === '/' ? '/' : url)
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
  const head = [
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${site.name}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${site.url}/images/hero/hero13-1280.webp" />`,
    meta.preload ? `<link rel="preload" as="image" imagesrcset="${meta.preload}" imagesizes="100vw" fetchpriority="high" />` : '',
  ].join('\n    ')
  return { html, head, title: meta.title }
}

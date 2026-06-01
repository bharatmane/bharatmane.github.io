/**
 * Google Photos URL extractor
 * Usage: node scripts/extract-photos.mjs "https://photos.app.goo.gl/XXXXX"
 *
 * Fetches a public shared album, extracts image URLs and upgrades them to
 * full resolution (w1920-h1080). Outputs ready-to-paste data/photography.ts content.
 */

const inputUrl = process.argv[2]
if (!inputUrl) {
  console.error('Usage: node scripts/extract-photos.mjs <google-photos-album-url>')
  process.exit(1)
}

// Step 1: resolve short URL to full URL
const redirectRes = await fetch(inputUrl, {
  method: 'HEAD',
  redirect: 'follow',
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
})
const fullUrl = redirectRes.url
console.log(`Resolved: ${fullUrl}`)

// Step 2: fetch the page HTML
const res = await fetch(fullUrl, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
  },
})
const html = await res.text()

// Step 3: extract all lh3 URLs
const regex = /https?:\/\/lh3\.googleusercontent\.com\/pw\/[A-Za-z0-9_\-]+/g
const matches = [...new Set(html.match(regex) ?? [])]

if (matches.length === 0) {
  console.log('\nNo photo URLs found. The album may require a logged-in session.')
  process.exit(0)
}

// Step 4: upgrade to full resolution by replacing size suffix
// URLs in HTML have small sizes like =w108-h72-no — strip and replace with large size
const fullRes = matches.map(url => `${url}=w1920-h1080`)

console.log(`\nFound ${fullRes.length} photo(s). Copy this into data/photography.ts:\n`)
console.log(`export const PHOTOS = [`)
fullRes.forEach((url, i) => {
  console.log(`  { url: '${url}', caption: '' },${i < fullRes.length - 1 ? '' : ''}`)
})
console.log(`]`)

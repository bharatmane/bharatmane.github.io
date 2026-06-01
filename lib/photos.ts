export interface Photo {
  url: string
  caption?: string
}

// Add your public Google Photos shared album URLs here.
// Each album will contribute up to `maxPerAlbum` photos to the strip.
// Add your PHOTOGRAPHY album URLs here (actual photos, not quote images).
// When empty, the Photography section is hidden automatically.
export const PHOTO_ALBUMS: { url: string; label: string }[] = [
  // e.g. { url: 'https://photos.app.goo.gl/XXXXX', label: 'Bengaluru 2023' },
]

async function fetchAlbumPhotos(albumUrl: string, label: string, maxPhotos = 5): Promise<Photo[]> {
  try {
    // Step 1: resolve short URL
    const headRes = await fetch(albumUrl, {
      method: 'HEAD',
      redirect: 'follow',
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
    })
    const fullUrl = headRes.url

    // Step 2: fetch HTML
    const res = await fetch(fullUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      next: { revalidate: 86400 }, // rebuild once per day
    })

    if (!res.ok) return []
    const html = await res.text()

    // Step 3: extract unique photo base URLs (only /pw/ paths = actual photos)
    const regex = /https?:\/\/lh3\.googleusercontent\.com\/pw\/[A-Za-z0-9_\-]+/g
    const matches = [...new Set(html.match(regex) ?? [])]

    // Step 4: upgrade to full resolution and limit count
    return matches
      .slice(0, maxPhotos)
      .map(url => ({ url: `${url}=w1920-h1080`, caption: label }))
  } catch {
    return []
  }
}

export async function getAllPhotos(maxPerAlbum = 5): Promise<Photo[]> {
  const results = await Promise.all(
    PHOTO_ALBUMS.map(album => fetchAlbumPhotos(album.url, album.label, maxPerAlbum))
  )
  return results.flat()
}

export interface AlbumQuote {
  url: string
  year: string
}

export const QUOTE_ALBUMS: { url: string; year: string }[] = [
  { url: 'https://photos.app.goo.gl/RrE9xuyu9UJcoTmA7', year: '2018' },
  { url: 'https://photos.app.goo.gl/V9kNx88ErcdohbBd6', year: '2019' },
  { url: 'https://photos.app.goo.gl/U8uLK6BqRMmY4JTJ8', year: '2020' },
  { url: 'https://photos.app.goo.gl/qbcur5SijQ6XyHPJ7', year: '2021' },
  { url: 'https://photos.app.goo.gl/m2L3hn6RUacJxbNd9', year: '2022' },
  { url: 'https://photos.app.goo.gl/4VopBdaGggx7LCUu5', year: '2023' },
]

async function fetchAlbumQuotes(albumUrl: string, year: string): Promise<AlbumQuote[]> {
  try {
    const headRes = await fetch(albumUrl, {
      method: 'HEAD',
      redirect: 'follow',
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
    })
    const fullUrl = headRes.url

    const res = await fetch(fullUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      next: { revalidate: 86400 },
    })

    if (!res.ok) return []
    const html = await res.text()

    const regex = /https?:\/\/lh3\.googleusercontent\.com\/pw\/[A-Za-z0-9_\-]+/g
    const matches = [...new Set(html.match(regex) ?? [])]

    // =w1200 resizes to 1200px wide and preserves the natural aspect ratio
    return matches.map(url => ({ url: `${url}=w1200`, year }))
  } catch {
    return []
  }
}

export async function getAllQuotesByYear(): Promise<Record<string, AlbumQuote[]>> {
  const results = await Promise.all(
    QUOTE_ALBUMS.map(album => fetchAlbumQuotes(album.url, album.year))
  )

  const byYear: Record<string, AlbumQuote[]> = {}
  for (const quotes of results) {
    if (quotes.length > 0) {
      byYear[quotes[0].year] = quotes
    }
  }
  return byYear
}

export const QUOTE_YEARS = QUOTE_ALBUMS.map(a => a.year)

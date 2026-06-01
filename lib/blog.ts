export interface BlogPost {
  id: string
  title: string
  url: string
  date: string
  excerpt: string
  featuredImage: string
  source: 'medium' | 'wordpress'
}

const RSS2JSON = 'https://api.rss2json.com/v1/api.json'
const MEDIUM_FEED = 'https://bharatmane.medium.com/feed'
const WP_API = 'https://public-api.wordpress.com/rest/v1/sites/bharatmane.wordpress.com/posts'

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
}

function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trimEnd() + '…'
}

async function fetchMediumPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${RSS2JSON}?rss_url=${encodeURIComponent(MEDIUM_FEED)}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    const data = await res.json()
    if (data.status !== 'ok') return []

    return (data.items ?? []).slice(0, 6).map((item: Record<string, unknown>) => ({
      id: `medium-${item.guid}`,
      title: String(item.title ?? ''),
      url: String(item.link ?? ''),
      date: String(item.pubDate ?? ''),
      excerpt: truncate(stripHtml(String(item.description ?? '')), 180),
      featuredImage: String(item.thumbnail ?? ''),
      source: 'medium' as const,
    }))
  } catch {
    return []
  }
}

async function fetchWordPressPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${WP_API}?number=6`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    const data = await res.json()

    return (data.posts ?? []).slice(0, 6).map((post: Record<string, unknown>) => ({
      id: `wp-${post.ID}`,
      title: String(post.title ?? ''),
      url: String(post.URL ?? ''),
      date: String(post.date ?? ''),
      excerpt: truncate(stripHtml(String(post.excerpt ?? '')), 180),
      featuredImage:
        post.featured_image
          ? String(post.featured_image)
          : '',
      source: 'wordpress' as const,
    }))
  } catch {
    return []
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const [medium, wordpress] = await Promise.all([
    fetchMediumPosts(),
    fetchWordPressPosts(),
  ])

  const all = [...medium, ...wordpress]
    .filter((p) => p.title)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return all.slice(0, 6)
}

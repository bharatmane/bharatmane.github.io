import { getBlogPosts } from '@/lib/blog'
import BlogCard from '@/components/ui/BlogCard'
import SectionHeader from '@/components/ui/SectionHeader'

export default async function Writing() {
  const posts = await getBlogPosts()

  return (
    <section id="writing" className="section-padding border-t border-border">
      <div className="content-width">
        <SectionHeader eyebrow="Writing" title="Thinking out loud" />

        {posts.length === 0 ? (
          <p className="font-sans text-text-secondary">No posts available right now.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <BlogCard key={post.id} post={post} featured={i === 0} />
            ))}
          </div>
        )}

        <div className="mt-12 flex gap-6">
          <a
            href="https://bharatmane.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm tracking-wide text-text-secondary hover:text-accent transition-colors underline underline-offset-4 decoration-border hover:decoration-accent"
          >
            All on Medium ↗
          </a>
          <a
            href="https://bharatmane.wordpress.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm tracking-wide text-text-secondary hover:text-accent transition-colors underline underline-offset-4 decoration-border hover:decoration-accent"
          >
            All on WordPress ↗
          </a>
        </div>
      </div>
    </section>
  )
}

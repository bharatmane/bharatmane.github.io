'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { BlogPost } from '@/lib/blog'

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    })
  } catch { return dateStr }
}

function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group flex flex-col border border-border bg-surface hover:border-accent/50 transition-colors duration-300 ${
        featured ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
    >
      {/* Featured image */}
      {post.featuredImage && (
        <div className={`relative overflow-hidden ${featured ? 'h-56 md:h-72' : 'h-40'}`}>
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 100vw, 33vw'}
          />
        </div>
      )}

      <div className="flex flex-col flex-1 p-5 md:p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className={`text-xs font-sans tracking-widest uppercase px-2 py-0.5 ${
            post.source === 'medium' ? 'bg-text-primary text-cream' : 'bg-border text-text-secondary'
          }`}>
            {post.source === 'medium' ? 'Medium' : 'WordPress'}
          </span>
          <span className="text-xs text-text-secondary font-sans">{formatDate(post.date)}</span>
          <span className="text-xs text-text-secondary font-sans ml-auto">
            {readingTime(post.excerpt)} min read
          </span>
        </div>

        <h3 className={`font-serif text-text-primary leading-snug mb-3 group-hover:text-accent transition-colors duration-200 ${
          featured ? 'text-2xl md:text-3xl' : 'text-xl line-clamp-2'
        }`}>
          {post.title}
        </h3>

        {post.excerpt && (
          <p className={`font-sans text-sm text-text-secondary leading-relaxed flex-1 ${
            featured ? 'line-clamp-4' : 'line-clamp-3'
          }`}>
            {post.excerpt}
          </p>
        )}

        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 font-sans text-xs tracking-widest uppercase text-accent hover:text-text-primary transition-colors flex items-center gap-2"
        >
          Read <span className="text-base leading-none">→</span>
        </a>
      </div>
    </motion.article>
  )
}

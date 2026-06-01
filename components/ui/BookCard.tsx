import type { Book } from '@/data/books'
import Image from 'next/image'

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="group flex flex-col">
      {/* Cover image */}
      <div className="relative overflow-hidden bg-surface border border-border aspect-[2/3]">
        <Image
          src={book.coverImage}
          alt={book.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
        />

        {/* Desktop hover overlay */}
        <div className="hidden md:flex absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/88 transition-all duration-400 flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
          <h3 className="font-serif text-sm text-cream leading-snug mb-2 line-clamp-3">
            {book.title}
          </h3>
          {book.description && (
            <p className="font-sans text-xs text-cream/65 leading-relaxed line-clamp-2 mb-3">
              {book.description}
            </p>
          )}
          <a
            href={book.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-widest uppercase text-accent hover:text-cream transition-colors"
          >
            Buy ↗
          </a>
        </div>
      </div>

      {/* Mobile always-visible title */}
      <div className="md:hidden pt-2 pb-1">
        <p className="font-sans text-xs text-text-primary leading-snug line-clamp-2 mb-1">
          {book.title}
        </p>
        <a
          href={book.buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs text-accent"
        >
          Buy ↗
        </a>
      </div>
    </div>
  )
}

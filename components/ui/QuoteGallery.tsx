'use client'

import { useState } from 'react'
import type { AlbumQuote } from '@/lib/quotes-albums'

interface QuoteGalleryProps {
  quotesByYear: Record<string, AlbumQuote[]>
  years: string[]
}

export default function QuoteGallery({ quotesByYear, years }: QuoteGalleryProps) {
  const defaultYear = years.includes('2023') ? '2023' : years[years.length - 1]
  const [activeYear, setActiveYear] = useState(defaultYear)

  const quotes = quotesByYear[activeYear] ?? []

  return (
    <>
      {/* Year filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`font-sans text-sm tracking-wide px-4 py-1.5 border transition-colors duration-200 ${
              activeYear === year
                ? 'border-accent text-accent bg-accent/5'
                : 'border-border text-text-secondary hover:border-accent/50 hover:text-accent'
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Masonry — CSS columns, natural image heights, puzzle fit */}
      {/* No AnimatePresence — instant swap avoids flicker as lazy images reload */}
      <div
        key={activeYear}
        className="columns-2 md:columns-3 lg:columns-4 gap-3"
      >
        {quotes.map((quote, i) => (
          <div
            key={`${activeYear}-${i}`}
            className="break-inside-avoid mb-3 overflow-hidden border border-border hover:border-accent/40 transition-colors duration-300"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={quote.url}
              alt={`Quote from ${quote.year}`}
              loading="lazy"
              className="w-full h-auto block"
            />
          </div>
        ))}
      </div>

      {quotes.length === 0 && (
        <p className="font-sans text-text-secondary text-sm">No quotes for {activeYear}.</p>
      )}
    </>
  )
}

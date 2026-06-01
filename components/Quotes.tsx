import { getAllQuotesByYear, QUOTE_YEARS } from '@/lib/quotes-albums'
import SectionHeader from '@/components/ui/SectionHeader'
import QuoteGallery from '@/components/ui/QuoteGallery'

export default async function Quotes() {
  const quotesByYear = await getAllQuotesByYear()
  const availableYears = QUOTE_YEARS.filter(y => quotesByYear[y]?.length > 0)

  return (
    <section id="quotes" className="section-padding border-t border-border">
      <div className="content-width">
        <SectionHeader eyebrow="Quotes" title="Words that endure" />

        <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed max-w-xl mb-10">
          A wall of words I&apos;ve been collecting since 2018 — from books, from walls,
          from random corners of the internet that refused to be forgotten.
        </p>

        {availableYears.length === 0 ? (
          <p className="font-sans text-text-secondary text-sm">Loading quotes…</p>
        ) : (
          <QuoteGallery quotesByYear={quotesByYear} years={availableYears} />
        )}
      </div>
    </section>
  )
}

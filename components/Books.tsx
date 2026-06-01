import { BOOKS } from '@/data/books'
import BookCard from '@/components/ui/BookCard'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Books() {
  return (
    <section id="books" className="section-padding border-t border-border">
      <div className="content-width">
        <SectionHeader eyebrow="Library" title="Books that shaped me" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-5">
          {BOOKS.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <p className="mt-10 font-sans text-sm text-text-secondary max-w-xl">
          Every book above is one I have read and returned to. These are the
          texts that define the craft — read them in any order, but read them.
        </p>
      </div>
    </section>
  )
}

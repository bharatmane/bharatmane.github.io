import { getAllPhotos } from '@/lib/photos'
import SectionHeader from '@/components/ui/SectionHeader'
import PhotoStrip from '@/components/ui/PhotoStrip'

export default async function Photography() {
  const photos = await getAllPhotos(12)

  if (photos.length === 0) return null

  return (
    <section id="photography" className="section-padding border-t border-border overflow-hidden">
      <div className="content-width mb-10">
        <SectionHeader eyebrow="Photography" title="Through the lens" />
      </div>
      <PhotoStrip photos={photos} />
      <p className="mt-6 content-width font-sans text-xs text-text-secondary">
        Drag to explore ·{' '}
        <a
          href="https://www.flickr.com/photos/bharatmane/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          Full gallery on Flickr ↗
        </a>
      </p>
    </section>
  )
}

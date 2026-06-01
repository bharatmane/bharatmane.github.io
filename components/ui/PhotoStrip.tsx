'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Photo } from '@/lib/photos'

export default function PhotoStrip({ photos }: { photos: Photo[] }) {
  const totalWidth = photos.length * 383 + 203 // photo width + gap + end card

  return (
    <motion.div
      drag="x"
      dragConstraints={{ right: 0, left: -Math.max(0, totalWidth - (typeof window !== 'undefined' ? window.innerWidth : 1200)) }}
      dragElastic={0.08}
      className="flex gap-3 px-6 md:px-10 cursor-grab active:cursor-grabbing select-none"
      style={{ width: 'max-content' }}
    >
      {photos.map((photo, i) => (
        <motion.div
          key={i}
          className="relative flex-shrink-0 overflow-hidden border border-border group"
          style={{ width: 380, height: 280 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={photo.url}
            alt={photo.caption ?? `Photo ${i + 1}`}
            fill
            className="object-cover pointer-events-none"
            sizes="380px"
            loading="lazy"
          />
          {photo.caption && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="font-sans text-xs text-white/90 tracking-wide">{photo.caption}</p>
            </div>
          )}
        </motion.div>
      ))}

      {/* End card */}
      <div
        className="flex-shrink-0 flex items-center justify-center border border-border bg-surface"
        style={{ width: 200, height: 280 }}
      >
        <a
          href="https://www.flickr.com/photos/bharatmane/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm tracking-wide text-text-secondary hover:text-accent transition-colors text-center px-6"
        >
          View all on<br />Flickr ↗
        </a>
      </div>
    </motion.div>
  )
}

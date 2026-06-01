'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ALBUMS } from '@/data/albums'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Calendars() {
  return (
    <section id="calendars" className="section-padding border-t border-border">
      <div className="content-width">
        <SectionHeader eyebrow="Family" title="Growing up, year by year" />

        <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed max-w-xl -mt-8 mb-10">
          SAI and SID — my two kids. Every December I design a year-end photo book for them.
          A small, deliberate act of keeping time.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {ALBUMS.map((album, i) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative overflow-hidden border border-border hover:border-accent/40 transition-colors duration-300 cursor-pointer aspect-video"
            >
              <Image
                src={album.coverUrl}
                alt={album.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                loading="lazy"
              />
              {/* Year label overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-sans text-xs text-white/90 tracking-wide">{album.name}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <p className="mt-8 font-sans text-sm text-text-secondary">
          SAI & SID — every year, every season, every ordinary extraordinary moment.
        </p>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
}

export default function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14"
    >
      {eyebrow && (
        <p className="text-xs font-sans tracking-[0.2em] uppercase text-accent mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-5xl md:text-6xl text-text-primary leading-tight">
        {title}
      </h2>
      <div className="mt-6 w-12 h-px bg-accent" />
    </motion.div>
  )
}

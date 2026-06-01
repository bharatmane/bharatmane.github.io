'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EMAIL = 'bharat.mane@gmail.com'

const socials = [
  { label: 'GitHub', href: 'https://github.com/bharatmane' },
  { label: 'Medium', href: 'https://bharatmane.medium.com' },
  { label: 'Flickr', href: 'https://www.flickr.com/photos/bharatmane/' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // fallback: select text
    }
  }

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="content-width">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-6">
            Get in touch
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-text-primary leading-tight mb-4">
            Have something<br />interesting to say?
          </h2>
          <div className="w-12 h-px bg-accent mb-10" />

          <div className="relative inline-block">
            <button
              onClick={handleCopy}
              className="group font-serif text-2xl md:text-3xl text-text-primary hover:text-accent transition-colors duration-200 relative"
            >
              {EMAIL}
              <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-accent transition-all duration-400 ease-out" />
            </button>

            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute -top-8 left-0 font-sans text-xs tracking-widest uppercase text-accent bg-cream border border-border px-3 py-1"
                >
                  Copied ✓
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <p className="mt-3 font-sans text-sm text-text-secondary">
            Click to copy
          </p>

          <div className="mt-12 flex flex-wrap gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm tracking-wide text-text-secondary hover:text-accent transition-colors underline underline-offset-4 decoration-border hover:decoration-accent"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

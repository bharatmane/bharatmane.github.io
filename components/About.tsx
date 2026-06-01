'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="content-width">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-8"
          >
            About
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary leading-snug mb-10"
          >
            I write code the way a craftsman makes furniture —
            <span className="text-text-secondary"> carefully, for people,
            built to outlast the trend.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="space-y-5 font-sans text-base md:text-lg text-text-secondary leading-relaxed border-l-2 border-accent pl-6"
          >
            <p>
              Fifteen years in, I still believe the hardest part of software
              is not the algorithm — it&apos;s the discipline to keep it simple.
              Clean code, honest design, continuous learning: principles I carry
              into every line I write.
            </p>
            <p>
              Bengaluru is home. I run in the mornings, photograph on weekends,
              and spend evenings reading the kind of books that argue back at you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            {[
              { label: 'GitHub', href: 'https://github.com/bharatmane' },
              { label: 'Medium', href: 'https://bharatmane.medium.com' },
              { label: 'Flickr', href: 'https://www.flickr.com/photos/bharatmane/' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm tracking-wide text-text-secondary hover:text-accent transition-colors underline underline-offset-4 decoration-border hover:decoration-accent"
              >
                {link.label} ↗
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

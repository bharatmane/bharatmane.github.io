'use client'

import { motion } from 'framer-motion'

export default function Manapakharu() {
  return (
    <section id="manapakharu" className="section-padding border-t border-border">
      <div className="content-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-4">
              A labour of love
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-text-primary leading-tight mb-6">
              Manapakharu
            </h2>
            <div className="w-12 h-px bg-accent mb-8" />

            <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed mb-6">
              A collection of poems by my wife — carefully gathered, set in type,
              and brought to life in a digital form that honours both the words
              and the poet.
            </p>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-10">
              &ldquo;Manapakharu&rdquo; — every page carries the intimacy of verse
              that was written not for the world, but for those who feel it.
            </p>

            <span className="inline-block font-sans text-sm tracking-wide text-text-secondary border border-border px-8 py-3 cursor-not-allowed">
              Coming soon
            </span>
          </motion.div>

          {/* Visual side — typographic cover */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 md:w-80 aspect-[2/3] bg-text-primary flex flex-col items-center justify-center p-10 shadow-2xl">
              {/* Decorative rule */}
              <div className="absolute top-8 left-8 right-8 h-px bg-white/20" />
              <div className="absolute bottom-8 left-8 right-8 h-px bg-white/20" />

              <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/40 mb-6 text-center">
                Poetry
              </p>
              <h3 className="font-serif text-4xl md:text-5xl text-white text-center leading-tight mb-6">
                Manapakharu
              </h3>
              <div className="w-8 h-px bg-accent mb-6" />
              <p className="font-sans text-xs tracking-widest text-white/40 text-center uppercase">
                Designed by<br />Bharat Mane
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

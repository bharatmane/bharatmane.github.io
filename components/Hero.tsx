'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const personas = ['Coder', 'Runner', 'Photographer'] as const
type Persona = (typeof personas)[number]

const personaImages: Record<Persona, string> = {
  Coder: '/images/BMHeader.jpg',
  Runner: '/images/BMHeader_Run.jpg',
  Photographer: '/images/BMHeader_Photographer.jpg',
}

const personaLinks: Record<Persona, string> = {
  Coder: 'https://github.com/bharatmane',
  Runner: '#',
  Photographer: 'https://www.flickr.com/photos/bharatmane/',
}

const personaCta: Record<Persona, string> = {
  Coder: 'GitHub ↗',
  Runner: 'On the road',
  Photographer: 'Flickr ↗',
}

function getISTGreeting() {
  const timeStr = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata',
  })
  const hour = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    hour12: false,
    timeZone: 'Asia/Kolkata',
  })
  const h = parseInt(hour)
  const greeting = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'
  return `${greeting} from Bengaluru · ${timeStr} IST`
}

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    setGreeting(getISTGreeting())
    const clock = setInterval(() => setGreeting(getISTGreeting()), 60000)
    return () => clearInterval(clock)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % personas.length), 4000)
    return () => clearInterval(interval)
  }, [])

  const current = personas[index]

  return (
    <section className="relative min-h-[100dvh] min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background images — all three pre-loaded, cross-fade on change */}
      {personas.map((persona) => (
        <div
          key={persona}
          className={`absolute inset-0 z-0 transition-opacity duration-[1200ms] ease-in-out ${
            persona === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={personaImages[persona]}
            alt={`Bharat Mane — ${persona}`}
            fill
            priority
            // object-top ensures the subject (upper body / face) is always visible
            // even when a landscape image is cropped into a portrait mobile viewport
            className={`object-cover object-top transition-transform duration-[6000ms] ease-out ${
              persona === current ? 'scale-105' : 'scale-100'
            }`}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient — stronger on mobile so text is always legible */}
      <div className="absolute inset-0 z-[1] pointer-events-none
        bg-gradient-to-r from-black/70 via-black/40 to-black/20
        md:from-black/65 md:via-black/35 md:to-transparent" />

      {/* Content */}
      <div className="relative z-10 content-width pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* IST greeting */}
          {greeting && (
            <p className="font-sans text-[10px] md:text-xs tracking-[0.2em] text-white/50 mb-4 md:mb-5">
              {greeting}
            </p>
          )}

          {/* Name */}
          <h1
            className="font-serif leading-[0.9] text-white mb-5 md:mb-6"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 12rem)', letterSpacing: '-0.03em' }}
          >
            Bharat
            <br />
            Mane
          </h1>

          {/* Animated persona */}
          <div className="flex items-center gap-3 mb-8 md:mb-10 h-10 md:h-12 overflow-hidden">
            <span className="font-sans text-lg md:text-xl text-white/50">—</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="font-serif text-2xl md:text-4xl text-white italic"
              >
                {current}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-8 md:mb-10">
            <a
              href="#writing"
              className="font-sans text-xs md:text-sm tracking-wide text-white border border-white/70
                px-5 md:px-7 py-2.5 md:py-3 hover:bg-white hover:text-text-primary transition-all duration-200"
            >
              View Work
            </a>
            {current !== 'Runner' && (
              <a
                href={personaLinks[current]}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs md:text-sm tracking-wide text-white/70 hover:text-white
                  transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white"
              >
                {personaCta[current]}
              </a>
            )}
          </div>

          {/* Persona ticker */}
          <div className="flex items-center gap-4 md:gap-6">
            {personas.map((p, i) => (
              <button
                key={p}
                onClick={() => setIndex(i)}
                className={`font-sans text-[10px] md:text-xs tracking-[0.15em] uppercase
                  transition-all duration-300 pb-1 ${
                    i === index
                      ? 'text-white border-b border-accent font-medium'
                      : 'text-white/40 hover:text-white/70 border-b border-transparent'
                  }`}
              >
                {p}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-sans text-[9px] tracking-widest text-white/40 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
